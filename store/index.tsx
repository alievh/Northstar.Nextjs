import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import BurgerMenuSlice from "./BurgerMenu/BurgerMenuSlice";
import BasketSlice from "./Basket/BasketSlice";

const store = configureStore({
  reducer: {
    BurgerMenuSlice: BurgerMenuSlice,
    BasketSlice: BasketSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
