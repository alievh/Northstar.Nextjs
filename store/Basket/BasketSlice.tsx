import { BasketType } from "@/types/basket.type";
import { BasketItemType } from "@/types/basketItem.type";
import { createSlice } from "@reduxjs/toolkit";

const initialBasket = {
  basket: {},
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
  const basketJson = localStorage.getItem("basket");

  console.log(basketJson);
  if (basketJson !== null) {
    dispatch(setBasket(JSON.parse(basketJson)));
  }
}

export function AddToBasket(dispatch: any, basketItem: BasketItemType) {
  const basketJson = localStorage.getItem("basket");

  if (basketJson !== null) {
    const basket: BasketType = JSON.parse(basketJson);

    const existBasketItem = basket.products.find((n) => n.id === basketItem.id);

    if (existBasketItem !== null && existBasketItem !== undefined) {
      const indexExistBasketItem = basket.products.indexOf(existBasketItem);
      existBasketItem.quantity += 1;
      basket.products[indexExistBasketItem] = existBasketItem;
    } else {
      basket.products.push(basketItem);
    }

    basket.count = basket.products.length;
    basket.total = basket.products.reduce((accumulator, object) => {
      return accumulator + object.discountPrice * object.quantity;
    }, 0);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch(setBasket(basket));
  } else {
    const basket: BasketType = {
      products: [basketItem],
      count: 1,
      total: basketItem.discountPrice * basketItem.quantity,
    };
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}

export function RemoveFromBasket(dispatch: any, id: number) {
  const basketJson = localStorage.getItem("basket");

  if (basketJson !== null) {
    const basket: BasketType = JSON.parse(basketJson);

    const basketItem = basket.products.find((x) => x.id === id);

    if (basketItem !== null && basketItem !== undefined) {
      const indexBasketItem = basket.products.indexOf(basketItem);
      basket.products.splice(indexBasketItem, 1);

      basket.count = basket.products.length;
      basket.total = basket.products.reduce((accumulator, object) => {
        return accumulator + object.discountPrice * object.quantity;
      }, 0);
      localStorage.setItem("basket", JSON.stringify(basket));
      dispatch(setBasket(basket));
    }
  }
}

export function ChangeQuantityBasket(
  dispatch: any,
  id: number,
  quantity: number
) {
  const basketJson = localStorage.getItem("basket");

  if (basketJson !== null) {
    const basket: BasketType = JSON.parse(basketJson);

    const basketItem = basket.products.find((x) => x.id === id);

    if (basketItem !== null && basketItem !== undefined) {
      const indexBasketItem = basket.products.indexOf(basketItem);

      basketItem.quantity = quantity;

      basket.products[indexBasketItem] = basketItem;

      basket.total = basket.products.reduce((accumulator, object) => {
        return accumulator + object.discountPrice * object.quantity;
      }, 0);

      console.log(basket);

      localStorage.setItem("basket", JSON.stringify(basket));
      dispatch(setBasket(basket));
    }
  }
}

export const { setBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
