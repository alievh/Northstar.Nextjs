import { Arimo } from "next/font/google";
import { FC } from "react";
import { Oval } from "react-loader-spinner";
import Product from "../Product";
import { ProductType } from "@/types/product.type";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface HomeProductsSectionProps {
  products: ProductType[];
  loading: boolean;
  sectionTitle: string;
  sectionDescription: string;
  error?: any;
}

const HomeProductsSection: FC<HomeProductsSectionProps> = ({
  products,
  loading,
  sectionTitle,
  sectionDescription,
  error
}) => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="row justify-content-center">
          <h3 className={arimo.className}>{sectionTitle}</h3>
          <p>{sectionDescription}</p>
        </div>
        <div className="row">
          {loading ? (
            <div className="d-flex justify-content-center">
              <Oval
                height={40}
                width={40}
                color="#000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#0f0f0"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />{" "}
            </div>
          ) : (
            products.map((product: ProductType) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={`$${product.discountPrice.toFixed(2)}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;
