import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PhonesPageModule } from './pages/phones/phones.module';
import { PhonesPageRoutingModule } from './pages/phones/phones-routing.module';
import {CardsPageRoutingModule} from 'src/app/pages/cards/cards-routing.module';
import {ProductComponent} from 'src/app/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./pages/cards/cards.module').then((m) => m.CardsPageModule),
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'phones',
    loadChildren: () =>
      import('./pages/phones/phones.module').then((m) => m.PhonesPageModule),
  },  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CardsPageRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
