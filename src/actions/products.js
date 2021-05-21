import actionCreator from '../utils/action';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = actionCreator(SET_PRODUCTS, 'payload');

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  meta: {
    api: true
  },
  payload: {
    path: 'products',
    onSuccess: [setProducts]
  }
});
