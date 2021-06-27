import { Component, Input } from '@angular/core';
import { TransactionObjectModel } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {

  @Input() transactionList: TransactionObjectModel[] = new Array<TransactionObjectModel>();

  constructor() {

  }

}
