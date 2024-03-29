import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {CardsPageRoutingModule} from 'src/app/pages/cards/cards-routing.module';
import {ProductComponent} from 'src/app/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'tvs',
    loadChildren: () => import('./pages/tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'laptops',
    loadChildren: () => import('./pages/laptops/laptops.module').then( m => m.LaptopsPageModule)
  },
  {
    path: 'phones',
    loadChildren: () => import('./pages/phones/phones.module').then( m => m.PhonesPageModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  }


];



// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
