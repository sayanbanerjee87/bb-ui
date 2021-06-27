import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './primeng.module';
import { LayoutModule } from './flexLayout.module';

/** Import Pipes */
import { DatePipe } from './pipes/date.pipe';

/** Component list */
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

/** Services */
import { TransactionService } from './services/transaction.service';


const COMPONENTS = [
  AppComponent,
  FooterComponent,
  LogoComponent,
  SubmitButtonComponent,
  FilterComponent,
  DataListComponent,
  TransactionItemComponent,
  TransactionFormComponent,
  HomePageComponent,
  DatePipe
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    PrimeNgModule,
    HttpClientModule
  ],
  exports: COMPONENTS,
  providers: [
    TransactionService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
