import { Injectable } from '@angular/core';

/** Environment object */
import { environment } from '@env/environment';

/** Model import */
import { TransactionModel, TransactionResponseModel } from '../models/transactions.model';

/** Service import  */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  public getTransactionData(): Observable<TransactionResponseModel> {

    const url = environment.api.url;

    return this.http.get<TransactionResponseModel>(url);

  }
}
