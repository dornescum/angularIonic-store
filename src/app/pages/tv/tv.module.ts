import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvPageRoutingModule } from './tv-routing.module';

import { TvPage } from './tv.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {ProductListComponent} from '../../components/product-list/product-list.component';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvPageRoutingModule,
    CartPageModule,
    ProductListComponent,
    HomePageModule
  ],
  declarations: [TvPage]
})
export class TvPageModule {}
