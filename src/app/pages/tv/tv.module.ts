import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvPageRoutingModule } from './tv-routing.module';

import { TvPage } from './tv.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {CardComponent} from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvPageRoutingModule,
    CartPageModule
  ],
  declarations: [TvPage, CardComponent]
})
export class TvPageModule {}
