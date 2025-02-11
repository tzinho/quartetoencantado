import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { fontMono, fontSans, fontTitle } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quarteto Encantado",
  description: "Aqui é onde a diversão acontece!",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontTitle.variable} ${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
