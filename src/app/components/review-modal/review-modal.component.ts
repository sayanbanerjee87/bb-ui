import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss']
})
export class ReviewModalComponent implements OnInit {

  displayModal: boolean;

  constructor() {

    this.displayModal = true;

  }

  ngOnInit(): void {
  }

}
