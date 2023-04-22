import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: string;
}

const Product: FC<ProductProps> = ({ id,image, name, price }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 product-container">
      <Link href={`products/${id}`}>
        <div style={{ margin: 'auto', maxWidth: '100%' }}>
        <Image
          src={`/images/${image}`}
          alt="Product picture"
          width={1920}
          height={350}
          quality={100}
          sizes="300px"
          style={{width: "100%", objectFit: "cover", }}
        />
        </div>
      </Link>
      <Link href={`products/${id}`}>
        <h4 className={baloo.className}>{name}</h4>
      </Link>
      <span>{price}</span>
    </div>
  );
};

export default Product;
