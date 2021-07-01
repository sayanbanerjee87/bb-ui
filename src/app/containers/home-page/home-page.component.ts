import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/** import models */
import { TransactionObjectModel, TransactionModel, AmountCurrencyModel, MerchantModel } from '../../models/transactions.model';
import { TransactionFormPayload } from '../../models/form.model';


/** import services */
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
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
   * 
   * @param api service instance
   */
  constructor(private api: TransactionService) 
  { 

    this.transactionList = new Array<TransactionObjectModel>();

    this.reviewPayload = null; 

    this.displayModal = false;

  }

  /**
   * Init method for container
   */
  ngOnInit(): void {

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

      },
      () => { 
        
        console.log('Service error encountered'); 
      
      }
    );

  }

  /**
   * Submit form for review
   * @param event Transaction payload
   */
  submitPayload(event: TransactionFormPayload) {
    
    this.reviewPayload = event;

    this.displayModal = true;

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
      accountNumber: "1234567"
    };

    let transaction: TransactionModel  = {
      "amountCurrency": amountCurrency,
      "type": "Salaries",
      "creditDebitIndicator": "CRDT",
      "merchant": merchantModel
    };
    
    let transferData: TransactionObjectModel = {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": valueDate
      },
      "transaction": transaction
    }

    this.transactionList.push(transferData);


  }

}
