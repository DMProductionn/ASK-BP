import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LimitState {
  limit: number;
  limitCategoryPage: number
}

const initialState: LimitState = {
  limit: 6,
  limitCategoryPage: 6
};

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setLimitCategoryPage: (state, action: PayloadAction<number>) => {
      state.limitCategoryPage = action.payload;
    },
  },
});

export const { setLimit, setLimitCategoryPage } = limitSlice.actions;

export default limitSlice.reducer;
