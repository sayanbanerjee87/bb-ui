import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

const COMPONENTS = [
  AppComponent,
  FooterComponent,
  LogoComponent,
  SubmitButtonComponent,
  FilterComponent,
  TransactionItemComponent,
  HomePageComponent
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: COMPONENTS,
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
