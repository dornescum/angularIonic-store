import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopsPageRoutingModule } from './laptops-routing.module';

import { LaptopsPage } from './laptops.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LaptopsPageRoutingModule,
        CartPageModule
    ],
  declarations: [LaptopsPage]
})
export class LaptopsPageModule {}
