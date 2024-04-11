import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import { Verification } from "next/dist/lib/metadata/types/metadata-types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "We Drive - Motorista Particular",
  description: "Motorista particular por agendamento",
  robots: "index, follow",
  verification: { code: "123456789" } as Verification,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={"bg-stone-900"}>
        <NavBar />
        <div className="flex flex-col h-full items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
