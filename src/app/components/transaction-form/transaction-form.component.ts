import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataObserverService } from '../../services/data-observer.service';

import { TransactionFormPayload } from '../../models/form.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit, OnDestroy{

  @Output() submitForReview: EventEmitter<TransactionFormPayload> = new EventEmitter();

  /**
   * Form group object
   */
  public transactionForm: FormGroup;

  /**
   * Account balance
   */
  @Input() accountBalance: number ;

  private balanceSubscription: Subscription;

  /**
   * Component constructor
   */
  constructor(private data: DataObserverService) {

    this.accountBalance = 5824.76;

    this.transactionForm = new FormGroup({
      fromAccount: new FormControl({value: 'My personal account :' + this.accountBalance, disabled: true}),
      toAccount: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    });

    this.balanceSubscription = new Subscription();

  }

  ngOnInit() {

    this.balanceSubscription = this.data.onMessage().subscribe(amount => {

      this.transactionForm.controls['fromAccount'].setValue('My personal account : ' + amount.balance);

      this.transactionForm.controls['amount'].reset();

      this.transactionForm.controls['toAccount'].reset();

    });

  }

  /**
   * 
   * @param event data object
   * @returns void
   */
  submitForm(): void {

      const transactionPayload: TransactionFormPayload = {
        amount: this.transactionForm.controls["amount"].value,
        toAccount: this.transactionForm.controls["toAccount"].value
      };
  
      this.submitForReview.emit(transactionPayload);
    
  }

  ngOnDestroy() {

    this.balanceSubscription.unsubscribe();

  }

  get toAccount() { return this.transactionForm.get('toAccount') };

  get amount() { return this.transactionForm.get('amount') };

}
