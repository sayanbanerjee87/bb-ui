import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/** import models */
import { TransactionObjectModel } from '../../models/transactions.model';
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
   * @param api service instance
   */
  constructor(private api: TransactionService) { 

    this.transactionList = new Array<TransactionObjectModel>();

    this.reviewPayload = null; 

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

  submitPayload(event: TransactionFormPayload) {
    
    this.reviewPayload = event;

  }

}
