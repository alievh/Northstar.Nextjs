import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/css/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Lato } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.className}>
      <Head>
        <title>Northstar | E-commerce</title>
        <meta name="description" content="Northstart E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <NextNProgress color="#1D1D1D" />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
