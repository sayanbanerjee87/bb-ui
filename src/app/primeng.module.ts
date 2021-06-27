import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({

    imports: [],
    exports: [
        ButtonModule,
        DialogModule,
        InputTextModule,
        OrderListModule,
        PanelModule,
        ToolbarModule
    ]

})

export class PrimeNgModule {}