import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckoutPageRoutingModule,
        CartPageModule
    ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
