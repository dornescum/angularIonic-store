import {createReducer, on} from '@ngrx/store';
import {LocalProduct} from 'src/app/shared/LocalProduct';
import {addProduct, removeProduct, clearCart} from 'src/app/cart-store/cart.actions';

export const initialCartEntries: LocalProduct[] = [];


export const cartReducer = createReducer(
  initialCartEntries,

  on(clearCart, _ => [] ),

  on(addProduct, (entries, product) => {
    const entriesClone: LocalProduct[] | any = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: LocalProduct[] | any = JSON.parse(JSON.stringify(entries));
    // @ts-ignore
    const found = entriesClone.find(e => e.id === product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);
