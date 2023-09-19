import { Nunito } from "next/font/google";
import localFont from "next/font/local";

export const nunito400 = Nunito({
  variable: "--nunito400",
  weight: "400",
  subsets: ["latin"],
});

export const nunito700 = Nunito({
  variable: "--nunito700",
  weight: "700",
  subsets: ["latin"],
});

export const nunito800 = Nunito({
  variable: "--nunito800",
  weight: "800",
  subsets: ["latin"],
});

export const SharpSans500 = localFont({
  src: "./sharp-sans/SharpSansMedium.otf",
  weight: "500",
  style: "extra-bold",
  variable: "--sharpsans500",
});

export const SharpSans700 = localFont({
  src: "./sharp-sans/SharpSansBold.otf",
  weight: "700",
  style: "extra-bold",
  variable: "--sharpsans700",
});

export const SharpSans800 = localFont({
  src: "./sharp-sans/SharpSansExtrabold.otf",
  weight: "800",
  style: "extra-bold",
  variable: "--sharpsans800"
});
