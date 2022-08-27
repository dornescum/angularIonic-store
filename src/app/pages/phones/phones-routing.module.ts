import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonesPage } from './phones.page';
import {ProductComponent} from 'src/app/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: PhonesPage
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
export class PhonesPageRoutingModule {}
