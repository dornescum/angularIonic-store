import {createAction, props} from '@ngrx/store';
import {Local} from 'src/app/shared/Local';

export const clearCart = createAction('Clear Cart');
export const addProduct = createAction('Add Product', props<Local>);
export const removeProduct = createAction('Remove Product', props<Local>);
