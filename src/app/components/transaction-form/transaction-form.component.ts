import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TransactionFormPayload } from '../../models/form.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {

  @Output() submitForReview: EventEmitter<TransactionFormPayload> = new EventEmitter();

  public transactionForm: FormGroup;

  constructor() {
    
    this.transactionForm = new FormGroup({
      fromAccount: new FormControl({value:'My personal account: 5824.76', disabled: true}),
      toAccount: new FormControl(''),
      amount: new FormControl()
    });

  }

  submitForm(event: TransactionFormPayload) {

    this.submitForReview.emit(event);
    
  }

}
