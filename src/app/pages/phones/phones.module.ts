import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { PhonesPageRoutingModule } from './phones-routing.module';

import { PhonesPage } from './phones.page';
import { ItemsComponent } from './items/items.component';
import {CartPageModule} from 'src/app/pages/cart/cart.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhonesPageRoutingModule,
        CartPageModule,
    ],
  declarations: [PhonesPage]
})
export class PhonesPageModule {}
