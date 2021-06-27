import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bb-ui';

  constructor(private primeNg: PrimeNGConfig) {

    this.primeNg.ripple = true;
    
  }
}
