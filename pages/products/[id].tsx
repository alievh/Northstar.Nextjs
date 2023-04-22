import { FC } from "react";
import { Arimo, Lato, Source_Sans_Pro } from "next/font/google";
import { GetServerSideProps } from "next";
import axios from "axios";
import { ProductType } from "@/types/product.type";
import ProductDetailSection from "@/components/Product/ProductDetailSection";
import ProductDescriptionSection from "@/components/Product/ProductDescriptionSection";
import Head from "next/head";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const sourceSanPro = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface singleProductProps {
  data: ProductType;
}

// SSR Fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios(`http://localhost:3100/products/${id}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
};

const SingleProduct: FC<singleProductProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Northstar | Product</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <main>
        <ProductDetailSection data={data} />
        <ProductDescriptionSection data={data} />
      </main>
    </>
  );
};

export default SingleProduct;
