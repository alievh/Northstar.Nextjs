import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface ProductProps {
  image: string;
  name: string;
  price: string;
}

const Product: FC<ProductProps> = ({ image, name, price }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 product-container">
      <a href="#">
        <Image
          src={require(`../assets/images/${image}`)}
          alt="Product picture"
          quality={100}
          sizes="300px"
          style={{width: "100%", objectFit: "cover"}}
        />
      </a>
      <a href="#">
        <h4 className={baloo.className}>{name}</h4>
      </a>
      <span>{price}</span>
    </div>
  );
};

export default Product;
