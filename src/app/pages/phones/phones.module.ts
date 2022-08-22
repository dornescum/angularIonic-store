import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { PhonesPageRoutingModule } from './phones-routing.module';

import { PhonesPage } from './phones.page';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonesPageRoutingModule,
  ],
  declarations: [PhonesPage]
})
export class PhonesPageModule {}
