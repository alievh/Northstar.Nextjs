import { FC, useState } from "react";
import Button from "../ui/Button";
import { ProductType } from "@/types/product.type";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

interface ProductDescriptionSectionProps {
  data: ProductType;
}

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = ({ data }) => {
  const [isDescriptionActive, setIsDescriptionActive] = useState(true);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  const activateDescription = () => {
    setIsDescriptionActive(true);
    setIsReviewsActive(false);
  };

  const activateReviews = () => {
    setIsDescriptionActive(false);
    setIsReviewsActive(true);
  };

  return (
    <section className="product-description-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul>
              <li>
                <Button
                  type="button"
                  className={
                    isDescriptionActive
                      ? "description-button active"
                      : "description-button"
                  }
                  onClick={activateDescription}
                >
                  Description
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  className={
                    isReviewsActive
                      ? "reviews-button active"
                      : "description-button"
                  }
                  onClick={activateReviews}
                >
                  Reviews (0)
                </Button>
              </li>
            </ul>
            <div className="product-description__content">
              {isDescriptionActive ? (
                <p className={lato.className}>{data.longDescription}</p>
              ) : (
                <p className={lato.className}> {data.shorDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescriptionSection;
