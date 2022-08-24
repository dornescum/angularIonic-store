import {Product} from 'src/app/shared/Product';
import {createSelector, createFeatureSelector} from '@ngrx/store';

export interface ProductGroup {
  product: Product;
  count: number;
}

export const selectCountProducts = createSelector(createFeatureSelector('cartEntries'), (state: Product[]) => state.length);


export const selectTotalPrice = createSelector(createFeatureSelector('cartEntries'), (state: Product[]) => {
  let totalPrice = 0;
  state.forEach(p => totalPrice += p.price);
  return totalPrice;
});

export const selectGroupedCartEntries = createSelector(createFeatureSelector('cartEntries'), (state: Product[]) => {
  const map: Map<number, ProductGroup> = new Map();

  state.forEach(p => {
    if (map.get(p.id)) {
      (map.get(p.id) as ProductGroup).count++;
    } else {
      map.set(p.id, {product: p, count: 1});
    }
  });

  const sortedMap = new Map([...map.entries()].sort());
  return Array.from(sortedMap.values());
});
