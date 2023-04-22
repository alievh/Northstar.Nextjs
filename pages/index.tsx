import useFetch from "@/hooks/useFetch";
import { ProductType } from "@/types/product.type";
import HomeBannerSection from "@/components/Home/HomeBannerSection";
import HomeProductsSection from "@/components/Home/HomeProductsSection";
import HomeBenefitSection from "@/components/Home/HomeBenefitSection";
import HomeBuyBannerSection from "@/components/Home/HomeBuyBannerSection";
import Head from "next/head";

export default function Home() {
  // CSR Fetch
  const { data, loading, error } = useFetch("http://localhost:3100/products");

  const bestSellers = data.filter((product: ProductType) => product.rate > 4);

  return (
    <>
      <Head>
        <title>Northstar | E-commerce</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <main>
        <HomeBannerSection />
        <HomeProductsSection
          sectionTitle="Discover NEW Arrivals"
          sectionDescription="Recently added shirts!"
          products={data}
          loading={loading}
        />
        <HomeBenefitSection />
        <HomeBuyBannerSection />
        <HomeProductsSection
          sectionTitle="Top Sellers"
          sectionDescription="Browse our top-selling products"
          products={bestSellers}
          loading={loading}
        />
      </main>
    </>
  );
}
