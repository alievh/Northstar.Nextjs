import { createSlice } from "@reduxjs/toolkit";

const initialBasket = {
  basket: [],
};

const BasketSlice = createSlice({
  name: "burgerMenuSlice",
  initialState: initialBasket,
  reducers: {
    setBasket(state, action) {
      state.basket = action.payload;
    },
  },
});

export function GetBasket(dispatch: any) {
    console.log("salam");
  const basketJson = localStorage.getItem("basket");
  console.log(basketJson);
  if (basketJson !== null) {
    dispatch(setBasket(JSON.parse(basketJson)));
  }
}

export const { setBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
