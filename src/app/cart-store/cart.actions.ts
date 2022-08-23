import {createAction, props} from '@ngrx/store';
import {LocalProduct} from 'src/app/shared/LocalProduct';

export const clearCart = createAction('Clear Cart');
export const addProduct = createAction('Add Product', props<LocalProduct>);
export const removeProduct = createAction('Remove Product', props<LocalProduct>);
