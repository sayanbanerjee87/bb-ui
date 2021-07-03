import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {

  /**
   * Submit form event
   */
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  /**
   * Button state
   */
  @Input() disabled: boolean = true;

  triggerSubmit(event: Event): void {
    this.submitForm.emit(event);
  }

}
