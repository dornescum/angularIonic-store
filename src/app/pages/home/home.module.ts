import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {BrowserModule} from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {BarRatingModule} from 'ngx-bar-rating';
// import {ProductComponent} from 'src/app/components/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CartPageModule,
    BarRatingModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
