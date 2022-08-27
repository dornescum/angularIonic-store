import {createAction, props} from '@ngrx/store';
import {Product} from 'src/app/shared/Product';



export const clearCart = createAction('Clear Cart');
export const addProduct = createAction('Add Product', props<Product>());
export const removeProduct = createAction('Remove Product', props<Product>());
