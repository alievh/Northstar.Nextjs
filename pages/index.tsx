import Product from "@/components/Product";
import { Arimo } from "next/font/google";
import bg from "../assets/images/home_banner.jpg";
import BuyBanner from "@/components/BuyBanner";
import BenefitCard from "@/components/BenefitCard";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="home-banner-section">
        <div
          className="home-banner-section__container"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="container d-flex justify-content-end">
            <div className="col-lg-5 home-banner-section__inside-container">
              <h2>stylist picks beat the heat</h2>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
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
      <section className="benefit-section">
        <div className="container">
          <div className="row">
            <BenefitCard
              icon={
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.25 16.5H28.5V11.4375C28.5 10.875 28.2188 10.2656 27.7969 9.84375L23.1562 5.20312C22.7344 4.78125 22.125 4.5 21.5625 4.5H19.5V2.25C19.5 1.03125 18.4688 0 17.25 0H5.25C3.98438 0 3 1.03125 3 2.25V4.5H0.375C0.140625 4.5 0 4.6875 0 4.875V5.625C0 5.85938 0.140625 6 0.375 6H13.125C13.3125 6 13.5 6.1875 13.5 6.375V7.125C13.5 7.35938 13.3125 7.5 13.125 7.5H1.875C1.64062 7.5 1.5 7.6875 1.5 7.875V8.625C1.5 8.85938 1.64062 9 1.875 9H11.625C11.8125 9 12 9.1875 12 9.375V10.125C12 10.3594 11.8125 10.5 11.625 10.5H0.375C0.140625 10.5 0 10.6875 0 10.875V11.625C0 11.8594 0.140625 12 0.375 12H10.125C10.3125 12 10.5 12.1875 10.5 12.375V13.125C10.5 13.3594 10.3125 13.5 10.125 13.5H3V19.5C3 21.9844 5.01562 24 7.5 24C9.98438 24 12 21.9844 12 19.5H18C18 21.9844 20.0156 24 22.5 24C24.9844 24 27 21.9844 27 19.5H29.25C29.625 19.5 30 19.1719 30 18.75V17.25C30 16.875 29.625 16.5 29.25 16.5ZM7.5 21.75C6.23438 21.75 5.25 20.7656 5.25 19.5C5.25 18.2812 6.23438 17.25 7.5 17.25C8.71875 17.25 9.75 18.2812 9.75 19.5C9.75 20.7656 8.71875 21.75 7.5 21.75ZM22.5 21.75C21.2344 21.75 20.25 20.7656 20.25 19.5C20.25 18.2812 21.2344 17.25 22.5 17.25C23.7188 17.25 24.75 18.2812 24.75 19.5C24.75 20.7656 23.7188 21.75 22.5 21.75ZM26.25 12H19.5V6.75H21.5625L26.25 11.4375V12Z"
                    fill="#024E82"
                  />
                </svg>
              }
              header="Free Shipping"
              text="Enjoy free shipping on all orders above $100"
            />
            <BenefitCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.375C5.57812 0.375 0.375 5.625 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.375 23.625 23.625 18.4219 23.625 12C23.625 5.625 18.375 0.375 12 0.375ZM20.1094 6L17.1562 8.95312C16.6406 8.10938 15.8906 7.35938 15.0469 6.84375L18 3.89062C18.7969 4.5 19.5 5.20312 20.1094 6ZM12 16.5C9.46875 16.5 7.5 14.5312 7.5 12C7.5 9.51562 9.46875 7.5 12 7.5C14.4844 7.5 16.5 9.51562 16.5 12C16.5 14.5312 14.4844 16.5 12 16.5ZM5.95312 3.89062L8.90625 6.84375C8.0625 7.35938 7.3125 8.10938 6.79688 8.95312L3.84375 6C4.45312 5.20312 5.15625 4.5 5.95312 3.89062ZM3.84375 18.0469L6.79688 15.0938C7.3125 15.9375 8.0625 16.6875 8.90625 17.2031L5.95312 20.1562C5.15625 19.5469 4.45312 18.8438 3.84375 18.0469ZM18 20.1562L15.0469 17.2031C15.8906 16.6875 16.6406 15.9375 17.1562 15.0938L20.1094 18.0469C19.5 18.8438 18.7969 19.5469 18 20.1562Z"
                    fill="#024E82"
                  />
                </svg>
              }
              header="SUPPORT 24/7"
              text="Our support team is there to help you for queries"
            />
            <BenefitCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9375 10.5469C10.2188 10.5469 10.5 10.2656 10.5 9.98438V7.73438C10.5 7.40625 10.2188 7.17188 9.9375 7.17188H5.34375C6.84375 5.10938 9.23438 3.75 12 3.75C16.5469 3.75 20.25 7.45312 20.25 12C20.25 16.5938 16.5469 20.25 12 20.25C9.89062 20.25 7.96875 19.5 6.51562 18.1875C6.28125 18 5.95312 18 5.76562 18.2344L4.17188 19.8281C3.9375 20.0625 3.9375 20.4375 4.17188 20.625C6.23438 22.5 9 23.625 12 23.625C18.4219 23.625 23.625 18.4688 23.625 12.0469C23.625 5.625 18.5156 0.46875 12.0938 0.421875C8.625 0.375 5.48438 1.875 3.375 4.26562V0.5625C3.375 0.28125 3.09375 0 2.8125 0H0.5625C0.234375 0 0 0.28125 0 0.5625V9.98438C0 10.2656 0.234375 10.5469 0.5625 10.5469H9.9375Z"
                    fill="#024E82"
                  />
                </svg>
              }
              header="30 DAYS RETURN"
              text="Simply return it within 30 days for an exchange."
            />
            <BenefitCard
              icon={
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 11.5312C12.3438 11.5312 11.875 12.0469 11.875 12.6562C11.9219 16.0781 11.4531 19.3125 10.5625 22.5938C10.4219 23.0625 10.6562 24 11.6406 24C12.1562 24 12.5781 23.7188 12.7188 23.2031C13.375 20.9531 14.1719 17.3438 14.125 12.6562C14.125 12.0469 13.6094 11.5312 13 11.5312ZM12.9531 7.73438C10.0938 7.73438 8.07812 9.9375 8.125 12.4688C8.125 14.7188 7.9375 16.9688 7.46875 19.125C7.375 19.7344 7.75 20.3438 8.35938 20.4844C8.96875 20.5781 9.57812 20.2031 9.67188 19.5938C10.1875 17.25 10.375 14.8594 10.375 12.4219C10.3281 11.2031 11.3125 9.98438 12.9062 9.98438C14.3594 9.98438 15.5781 11.1562 15.625 12.5625C15.625 14.8125 15.4844 17.1094 15.1094 19.3125C15.0156 19.9219 15.4375 20.4844 16.0469 20.5781C16.9844 20.7656 17.3125 19.875 17.3125 19.6875C17.7344 17.3438 17.875 14.9062 17.875 12.5156C17.8281 9.9375 15.625 7.78125 12.9531 7.73438ZM7.75 6.79688C7.28125 6.42188 6.57812 6.46875 6.15625 6.9375C4.98438 8.4375 4.32812 10.3125 4.375 12.1875C4.375 13.9688 4.23438 15.75 3.90625 17.4375C3.8125 18.0938 4.23438 18.6562 4.84375 18.75C5.78125 18.9375 6.10938 18.0938 6.15625 17.8594C6.48438 15.9844 6.625 14.0625 6.625 12.1875C6.57812 10.7812 7.04688 9.46875 7.9375 8.39062C8.3125 7.875 8.21875 7.17188 7.75 6.79688ZM12.9062 3.89062C12.1562 3.84375 11.4531 3.9375 10.75 4.125C10.1406 4.26562 9.76562 4.875 9.90625 5.4375C10.0469 6.04688 10.6562 6.42188 11.2656 6.28125C11.7812 6.1875 12.2969 6.14062 12.8594 6.14062C16.375 6.1875 19.3281 9 19.375 12.4219C19.375 14.2031 19.2812 15.9844 19.0938 17.7656C19.0469 18.375 19.4688 18.9375 20.0781 18.9844C20.875 19.0781 21.2969 18.4688 21.3438 18C21.5312 16.3594 21.625 14.7188 21.625 13.0312C21.625 12.7969 21.625 12.6094 21.625 12.375C21.5312 7.78125 17.6406 3.9375 12.9062 3.89062ZM24.7188 9.5625C24.5781 8.95312 23.9688 8.57812 23.3594 8.71875C22.75 8.85938 22.375 9.42188 22.5156 10.0312C22.7031 11.0625 22.75 11.8125 22.7031 12.9375C22.7031 13.5469 23.2188 14.0625 23.8281 14.0625C24.4844 14.0625 24.9531 13.5938 24.9531 12.9375C25 11.9062 25 10.875 24.7188 9.5625ZM22.7969 5.29688C20.5469 2.0625 16.7969 0.09375 12.8125 0.046875C9.57812 0 6.53125 1.17188 4.28125 3.42188C2.125 5.625 0.953125 8.53125 1 11.5781V12.6094C0.953125 13.2188 1.46875 13.7344 2.07812 13.7344C2.07812 13.7344 2.07812 13.7344 2.125 13.7344C2.6875 13.7344 3.20312 13.2656 3.20312 12.6562L3.25 11.5312C3.20312 9.09375 4.14062 6.79688 5.875 5.01562C7.70312 3.23438 10.1406 2.25 12.8125 2.29688C16.0469 2.34375 19.0938 3.9375 20.9688 6.60938C21.3438 7.125 22.0469 7.21875 22.5625 6.89062C23.0312 6.51562 23.1719 5.8125 22.7969 5.29688Z"
                    fill="#024E82"
                  />
                </svg>
              }
              header="100% PAYMENT SECURE"
              text="Our payments are secured with 256 bit encryption"
            />
          </div>
        </div>
      </section>
      <section className="buybanner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <BuyBanner
                containerClass="p-150"
                header="peace of mind"
                text="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind."
              />
            </div>
            <div className="col-lg-5">
              <BuyBanner
                containerClass="p-50"
                header="Buy 2 Get 1 Free"
                text="End of season sale. Buy any 2 items of your choice and get 1 free."
              />
            </div>
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
          <div className="row justify-content-center">
            <a className="topsellers-section__shop-now" href="#">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
