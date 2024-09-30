import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeProduct } from '../../types/product.type';

export interface ProductState {
  product: TypeProduct;
  productIsArray: { products: TypeProduct[], has_more: boolean };
  productIsArrayCategory: { products: TypeProduct[], has_more: boolean };
}

const initialState: ProductState = {
  product: {
    id: '',
    name: '',
    description: '',
    img: '',
  },
  productIsArray: { products: [], has_more: false },
  productIsArrayCategory: { products: [], has_more: false },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<TypeProduct>) => {
      state.product = action.payload;
    },
    setProductIsArray: (state, action: PayloadAction<{products: TypeProduct[], has_more: boolean}>) => {
      state.productIsArray = action.payload;
    },
    setProductIsArrayCategory: (state, action: PayloadAction<{products: TypeProduct[], has_more: boolean}>) => {
      state.productIsArrayCategory = action.payload;
    },
  },
});

export const { setProduct, setProductIsArray, setProductIsArrayCategory } = productSlice.actions;

export default productSlice.reducer;
