import { Component, Input, Output, EventEmitter } from '@angular/core';


import { TransactionFormPayload } from '../../models/form.model';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss']
})
export class ReviewModalComponent {

  @Input() displayModal: boolean;

  /**
   * Transaction input value
   */
  @Input() transaction: TransactionFormPayload;

  /**
   * Event transfer money
   */
  @Output() submitTransfer: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Destroy modal component
   */
  @Output() modalClose: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * Component constructor
   */
  constructor() {

    this.displayModal = true;

    this.transaction = {
      "amount": 0,
      "toAccount": ""
    }

  }

  /**
   * CLose modal component
   */
  closeModal() {

    this.modalClose.emit();
    
  }

  /**
   * Transfer money
   * @param event event object
   */
  moneyTransfer(event: Event) {

    this.submitTransfer.emit(event);

  }

}
