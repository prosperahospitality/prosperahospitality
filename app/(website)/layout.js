import localFont from "next/font/local";
import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";

export const metadata = {
  title: "Prospera Hospitality",
  description: "Prospera Hospitality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`lg:`}
      >
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
