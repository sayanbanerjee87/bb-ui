import { Directive, Input } from '@angular/core';

/** Directives */
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";




@Directive({
  selector: '[appAmountCheckValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AmountCheckValidatorDirective, multi: true }]
})
export class AmountCheckValidatorDirective implements Validator {

  private valFn: ValidatorFn;

  /**
   * Account balance
   */
  @Input() accountBalance: number;

  constructor() {

      this.valFn = this.validateNumericValue();

      this.accountBalance = 0;

  }

  validate(c: AbstractControl): ValidationErrors | null {
      return this.valFn(c);
  }

  validateNumericValue(): ValidatorFn {
    return (control: AbstractControl) => {
        let isValid = control.value < this.accountBalance;
  
        if (isValid) {
            return null;
        }
        else {
            return { 'numericValueCheck': 'failed' };
        }
    }
  }

}
