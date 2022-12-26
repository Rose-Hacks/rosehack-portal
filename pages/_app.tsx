import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
// eslint-disable-next-line camelcase
import { Lexend, Press_Start_2P } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const pixel = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend.variable} ${pixel.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
