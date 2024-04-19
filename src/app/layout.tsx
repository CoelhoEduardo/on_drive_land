import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import { Verification } from "next/dist/lib/metadata/types/metadata-types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Motorista Particular por uma fração de custo | We Drive",
  description:
    "Agende sua viagem com motoristas particulares profissionais da We Drive. Segurança e conforto em cada trajeto. Programe sua rotina com a gente hoje!",
  robots: "index, follow",
  verification: { code: "123456789" } as Verification,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="keywords" content="motorista-particular, motorista, serviços, motorista particular, agendamentos, we drive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title?.toString()} />
        <meta
          property="og:description"
          content={metadata.description?.toString()}
        />
        <meta
          property="og:image"
          content="https://www.wedrivebrasil.com/images/header_desk.jpg"
        />
        <meta property="og:url" content="https://www.wedrivebrasil.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.wedrivebrasil.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={"bg-stone-900"}>
        <NavBar />
        <div className="flex flex-col h-full items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
