import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonesPageRoutingModule } from './phones-routing.module';

import { PhonesPage } from './phones.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {ProductListComponent} from '../../components/product-list/product-list.component';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonesPageRoutingModule,
    CartPageModule,
    ProductListComponent,
    HomePageModule,
  ],
  exports: [
  ],
  declarations: [PhonesPage]
})
export class PhonesPageModule {}
