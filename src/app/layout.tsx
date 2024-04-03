import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "We Drive - Motorista Particular",
  description: "Motorista particular por agendamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gray-900"}>
        <NavBar />
        <div className="flex flex-col h-full items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
