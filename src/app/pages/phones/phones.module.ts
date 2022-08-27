import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { PhonesPageRoutingModule } from './phones-routing.module';

import { PhonesPage } from './phones.page';
import { ItemsComponent } from './items/items.component';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {ProductComponent} from 'src/app/components/product/product.component';
import {AppModule} from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonesPageRoutingModule,
    CartPageModule,
    AppModule,
  ],
  declarations: [PhonesPage]
})
export class PhonesPageModule {}
