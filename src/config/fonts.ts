import { Bricolage_Grotesque, Acme } from "next/font/google";
import localFont from "next/font/local";

export const fontMono = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const fontSans = Acme({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const fontTitle = localFont({
  src: [
    {
      path: "../../public/fonts/waltograph.regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-title",
});
