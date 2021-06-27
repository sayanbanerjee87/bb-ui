import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { OrderList, OrderListModule } from 'primeng/orderlist';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({

    imports: [],
    exports: [
        ButtonModule,
        DialogModule,
        InputTextModule,
        OrderListModule,
        ToolbarModule
    ]

})

export class PrimeNgModule {}