import { BasketType } from "@/types/basket.type";
import { BasketItemType } from "@/types/basketItem.type";
import { Arimo } from "next/font/google";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface CheckoutYourOrderSectionProps {
  basket: BasketType;
}

const CheckoutYourOrderSection: FC<CheckoutYourOrderSectionProps> = ({
  basket,
}) => {
  return (
    <section className="your-order-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className={arimo.className}>Your order</h4>
            <table className="table">
              <thead>
                <tr className={arimo.className}>
                  <th scope="col">Product</th>
                  <th scope="col">Total</th>
                  {basket.total !== null && basket.total !== undefined ? (
                    <th scope="col">Quantity</th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {basket.products !== undefined && basket.products !== null
                  ? basket.products.map((product: BasketItemType) => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>
                          $
                          {(product.discountPrice * product.quantity).toFixed(
                            2
                          )}
                        </td>
                        <td>x{product.quantity}</td>
                      </tr>
                    ))
                  : null}
                {basket.total !== null && basket.total !== undefined ? (
                  <>
                    <tr>
                      <td>Subtotal</td>
                      <td>${basket.total.toFixed(2)}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>${basket.total.toFixed(2)}</td>
                      <td></td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td>Subtotal</td>
                      <td>$0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>$0</td>
                      <td></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutYourOrderSection;
