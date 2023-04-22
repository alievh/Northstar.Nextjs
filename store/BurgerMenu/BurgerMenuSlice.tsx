import { createSlice } from '@reduxjs/toolkit';

const initialBurgerMenu = { isActive: false };

const BurgerMenuSlice = createSlice({
  name: 'burgerMenuSlice',
  initialState: initialBurgerMenu,
  reducers: {
    toogleBurgerMenu(state) {
      state.isActive = !state.isActive;
    },
    setBurgerMenu(state, action) {
      state.isActive = action.payload;
    }
  },
});

export const burgerMenuAction = BurgerMenuSlice.actions;

export default BurgerMenuSlice.reducer;