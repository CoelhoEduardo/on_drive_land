import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "We Drive - O Aplicativo de transporte do seu condomínio",
  description: "Aplicativo de transporte do seu condomínio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="bg-gray-900 flex flex-col h-full items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
