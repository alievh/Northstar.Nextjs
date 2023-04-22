import { BasketItemType } from "./basketItem.type";

export type BasketType = {
  products: BasketItemType[];
  total: number;
  count: number;
};
