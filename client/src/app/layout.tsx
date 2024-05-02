import "../../public/styles/index.scss";
import "../../public/styles/main.scss";

import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolero - Online Ticket Booking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.className}>
        <Header />

        <CssBaseline />
        {children}

        <Footer />
      </body>
    </html>
  );
}
