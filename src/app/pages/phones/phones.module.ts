import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonesPageRoutingModule } from './phones-routing.module';

import { PhonesPage } from './phones.page';
import {CartPageModule} from 'src/app/pages/cart/cart.module';
import {CardComponent} from 'src/app/components/card/card.component';
import {ProductListComponent} from "../../components/product-list/product-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhonesPageRoutingModule,
        CartPageModule,
        ProductListComponent,
    ],
  exports: [
    CardComponent
  ],
  declarations: [PhonesPage, CardComponent]
})
export class PhonesPageModule {}
