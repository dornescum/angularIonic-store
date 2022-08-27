import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {Product} from 'src/app/shared/Product';
import {ProductComponent} from 'src/app/components/product/product.component';


// FIXME cardsPageRoutingModule
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule,
    CartPageModule,
  ],
  declarations: [CardsPage, ProductComponent]
})
export class CardsPageModule {}
