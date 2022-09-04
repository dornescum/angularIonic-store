import {createReducer, on} from '@ngrx/store';
import {Product} from 'src/app/shared/Product';
import {addProduct, removeProduct, clearCart} from 'src/app/cart-store/cart.actions';
import { Preferences } from '@capacitor/preferences';
// import {retry} from 'rxjs/operators';

export const initialCartEntries: Product[] = [];


export const cartReducer = createReducer(initialCartEntries,

  on(clearCart, _ => {
   const clearLS = async () =>{
      await Preferences.set({
        key: '',
        value: '',
      });
    };
   clearLS();
    return [];
  }),

  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    // console.log(product);
    entriesClone.push(product);
    // console.log(entriesClone);
    const setName = async () => {
      await Preferences.set({
        key: JSON.stringify(product.id),
        value: JSON.stringify(product),
      });
      // console.log('set values');
    };
    setName();
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[]  = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.id === product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    const rmProduct = async () =>{
      await Preferences.remove({ key: JSON.stringify(product.id) });
    };
    rmProduct();
    return entriesClone;
  }));
