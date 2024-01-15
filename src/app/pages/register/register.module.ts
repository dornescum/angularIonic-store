import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {CartPageModule} from '../cart/cart.module';
import {HomePageModule} from "../home/home.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule,
        CartPageModule,
        ReactiveFormsModule,
        HomePageModule
    ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
