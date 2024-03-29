import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { LaptopsPageRoutingModule } from './laptops-routing.module';

import { LaptopsPage } from './laptops.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {ProductListComponent} from '../../components/product-list/product-list.component';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopsPageRoutingModule,
    CartPageModule,
    ProductListComponent,
    HomePageModule
  ],
    exports: [
    ],
    declarations: [LaptopsPage]
})
export class LaptopsPageModule {}
