import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPage } from './cards.page';
import {ProductComponent} from 'src/app/components/product/product.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
