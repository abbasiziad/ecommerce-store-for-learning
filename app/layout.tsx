import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "E-COMMERCE STORE",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}