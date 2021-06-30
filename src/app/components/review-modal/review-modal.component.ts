import { Component } from '@angular/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss']
})
export class ReviewModalComponent {

  displayModal: boolean;

  constructor() {

    this.displayModal = true;

  }

}
