import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonesPage } from './phones.page';
import {ProductComponent} from 'src/app/components/product/product.component';
import {ItemsComponent} from 'src/app/pages/phones/items/items.component';

const routes: Routes = [
  {
    path: '',
    component: PhonesPage
  },
  {
    path: 'phone/:id',
    component: ItemsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonesPageRoutingModule {}
