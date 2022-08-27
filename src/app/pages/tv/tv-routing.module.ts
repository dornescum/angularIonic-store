import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvPage } from './tv.page';
import {ProductComponent} from 'src/app/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: TvPage
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
export class TvPageRoutingModule {}
