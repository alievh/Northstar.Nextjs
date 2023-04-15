import Product from "@/components/Product";
import { Arimo } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="products-section">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className={arimo.className}>Discover NEW Arrivals</h3>
            <p>Recently added shirts!</p>
          </div>
          <div className="row">
            <Product
              image="product1.jpg"
              name="Plain White Shirt"
              price="$29.00"
            />
            <Product image="product2.jpg" name="Denim Jacket" price="$69.00" />
            <Product
              image="product3.jpg"
              name="Black Polo Shirt"
              price="$49.00"
            />
            <Product
              image="product4.jpg"
              name="Blue Sweatshirt"
              price="$79.00"
            />
            <Product
              image="product5.jpg"
              name="Blue Plain Shirt"
              price="$49.00"
            />
            <Product
              image="product6.jpg"
              name="Dark Blue Shirt"
              price="$89.00"
            />
            <Product
              image="product7.jpg"
              name="Outcast T Shirt"
              price="$19.00"
            />
            <Product
              image="product8.jpg"
              name="Polo Plain Shirt"
              price="$29.00"
            />
          </div>
        </div>
      </section>
      <section className="topsellers-section">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className={arimo.className}>Top Sellers</h3>
            <p>Browse our top-selling products</p>
          </div>
          <div className="row">
            <Product
              image="TopSeller1.jpg"
              name="Plain White Shirt"
              price="$29.00"
            />
            <Product
              image="TopSeller2.jpg"
              name="Denim Jacket"
              price="$69.00"
            />
            <Product
              image="TopSeller3.jpg"
              name="Black Polo Shirt"
              price="$49.00"
            />
            <Product
              image="TopSeller4.jpg"
              name="Blue Sweatshirt"
              price="$79.00"
            />
          </div>
          <div className="row">
            <button type="button">Shop Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}
