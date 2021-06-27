import { Component, Input } from '@angular/core';
import { TransactionObjectModel } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {

  /**
   * List of transactions
   */
  @Input() transactionList: any;

  constructor() { }

}
