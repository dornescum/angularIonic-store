import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

// import {PhonePipe} from './shared/pipes/phone.pipe';
import {ApiService} from 'src/app/services/api.service';
import {ProductComponent} from 'src/app/components/product/product.component';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from 'src/app/cart-store/cart.reducer';
import {CartPageModule} from 'src/app/pages/cart/cart.module';

import {BarRatingModule} from 'ngx-bar-rating';
import {HomePageModule} from "./pages/home/home.module";



@NgModule({
  declarations: [AppComponent, ProductComponent], // eslint-disable-next-line max-len
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({cartEntries: cartReducer}), CartPageModule, BarRatingModule, HomePageModule],
  providers: [{
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy
  }, ApiService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
