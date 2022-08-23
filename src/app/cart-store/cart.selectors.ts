import {LocalProduct} from 'src/app/shared/LocalProduct';
import {createSelector, createFeatureSelector} from '@ngrx/store';

export interface ProductGroup {
  product: LocalProduct;
  count: number;
}

export const selectCountProducts = createSelector(createFeatureSelector('cartEntries'), (state: LocalProduct[]) => state.length);

export const selectTotalPrice = createSelector(createFeatureSelector('cartEntries'), (state: LocalProduct[]) => {
  let totalPrice = 0;
  state.forEach(p => totalPrice += p.price);
  return totalPrice;
});

export const selectGroupedCartEntries = createSelector(createFeatureSelector('cartEntries'), (state: LocalProduct[]) => {
  const map: Map<number, ProductGroup> = new Map;

  state.forEach(p => {
    // @ts-ignore
    if (map.get(p.id)) {
      // @ts-ignore
      (map.get(p.id) as ProductGroup).count++;
    } else {
      // @ts-ignore
      map.set(p.id, {product: p, count: 1});
    }
  });

  const sortedMap = new Map([...map.entries()].sort());
  return Array.from(sortedMap.values());
});
