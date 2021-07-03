import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/** import models */
import { TransactionObjectModel, TransactionModel, AmountCurrencyModel, MerchantModel } from '../../models/transactions.model';
import { TransactionFormPayload } from '../../models/form.model';


/** import services */
import { TransactionService } from '../../services/transaction.service';
import { DataObserverService } from '../../services/data-observer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  /**
   * Transaction response observable
   * @ignore
  */
  public transactionList: TransactionObjectModel[];

  /**
   * Review payload
   * @ignore
   */
  public reviewPayload: TransactionFormPayload | null;

  /**
   * 
   * @ignore
   */
  public displayModal: boolean;

  /**
   * Personal account balance
   */
  public accountBalance: number;
  /**
   * 
   * @param cdr Change detection reference
   * @param api service instance
   */
  constructor(private api: TransactionService,
              private cdr: ChangeDetectorRef,
              private data: DataObserverService
            ) 
  { 

    this.transactionList = new Array<TransactionObjectModel>();

    this.accountBalance = 5824.76;

    this.reviewPayload = null; 

    this.displayModal = false;

  }

  /**
   * Init method for container
   */
  ngOnInit(): void {

    this.data.sendMessage(this.accountBalance);

    const apiData = this.api.getTransactionData().pipe(
                                map((res: any) => {

                                  if(!res && !res.data && !res.data.length ) {

                                    throw new Error("Empty response received");

                                  }

                                  return res.data;

                                }),
                                catchError(() => of([]))
    );

    apiData.subscribe((data: TransactionObjectModel[]) => { 
        
        this.transactionList = data;

        this.transactionList.sort((elem: any, elem1: any) => {
          
          return elem1.dates.valueDate - elem.dates.valueDate;

        });

        this.cdr.markForCheck();

      },
      (error: any) => { 
        
        console.log('Service error encountered' + error); 
      
      }
    );

  }

  /**
   * CLose modal
   */
  public modalClose() {

    this.reviewPayload = null;

    this.cdr.markForCheck();

  }

  /**
   * Submit form for review
   * @param event Transaction payload
   */
  submitPayload(event: TransactionFormPayload) {
    
    this.reviewPayload = event;

  }

  /**
   * Send money for transfer
   */
  sendTransfer() {

    const date = new Date().toDateString();
    const valueDate = Date.parse(date);
    let amountCurrency: AmountCurrencyModel = {
      "amount": this.reviewPayload && this.reviewPayload.amount ? this.reviewPayload.amount : 0,
      "currencyCode": "EUR"
    };

    let merchantModel: MerchantModel = {
      name: this.reviewPayload && this.reviewPayload.toAccount ? this.reviewPayload.toAccount : '',
      accountNumber: "013218901231"
    };

    let transaction: TransactionModel  = {
      "amountCurrency": amountCurrency,
      "type": "Online transfer",
      "creditDebitIndicator": "DBIT"
    };
    
    let transferData: TransactionObjectModel = {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": valueDate
      },
      "transaction": transaction,
      "merchant": merchantModel
    }

    this.accountBalance = this.accountBalance - Number(amountCurrency.amount);

    this.transactionList = [...this.transactionList, transferData];

    this.transactionList.sort((elem: any, elem1: any) => {
          
      return elem1.dates.valueDate - elem.dates.valueDate;

    });

    this.reviewPayload = null;

    this.cdr.markForCheck();

    this.data.sendMessage(this.accountBalance);

  }

}
