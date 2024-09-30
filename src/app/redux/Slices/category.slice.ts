import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
  subCategory: {
    id: number | null;
    title: string;
  };
  activeParentCategory: number;
}

const initialState: CategoryState = {
  subCategory: {
    id: null,
    title: '',
  },
  activeParentCategory: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSubCategory: (state, action: PayloadAction<{ id: number | null; title: string }>) => {
      state.subCategory = action.payload;
    },
    setActiveParentCategory: (state, action: PayloadAction<number>) => {
      state.activeParentCategory = action.payload;
    },
  },
});

export const { setSubCategory, setActiveParentCategory } = categorySlice.actions;

export default categorySlice.reducer;
