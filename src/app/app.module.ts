import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhonePipe } from './shared/pipes/phone.pipe';
import {ApiService} from 'src/app/services/api.service';
import { ProductComponent } from 'src/app/components/product/product.component';
import { LocalPhonesService } from './services/localPhones.service';
import { LocalService } from './services/local.service';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from 'src/app/cart-store/cart.reducer';
import {CartPageModule} from 'src/app/pages/cart/cart.module';


@NgModule({
  declarations: [AppComponent, PhonePipe, ProductComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({cartEntries: cartReducer}),
    CartPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    ,
    LocalPhonesService,
    LocalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
