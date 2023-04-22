import { Lato } from "next/font/google";
import Head from "next/head";
import { FC } from "react";
import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";
import Footer from "./Footer";

const lato = Lato({ weight: "400", subsets: ["latin"] });

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={lato.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <NextNProgress color="#1D1D1D" />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
