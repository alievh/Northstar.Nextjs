import { BasketType } from "./basket.type";
import { BillingDetailType } from "./billing-detail.type"

export type OrderType = {
    billingDetail: BillingDetailType;
    basket: BasketType;
}