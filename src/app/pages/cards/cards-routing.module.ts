import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPage } from './cards.page';
import {ProductComponent} from 'src/app/components/product/product.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CardsPage
  },
{
    path: 'product/:id',
    component: ProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
