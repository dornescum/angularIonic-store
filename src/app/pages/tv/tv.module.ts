import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvPageRoutingModule } from './tv-routing.module';

import { TvPage } from './tv.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvPageRoutingModule,
    CartPageModule
  ],
  declarations: [TvPage]
})
export class TvPageModule {}
