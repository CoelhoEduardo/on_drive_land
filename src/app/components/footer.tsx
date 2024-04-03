import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 w-full h-full p-5 mt-12">
      <div className="flex flex-col mt-16 mb-5 md:ml-12">
        <div className="flex md:flex-row flex-col gap-2">
          <h1>We Drive Brasil Ltda. </h1>
          <p>Todos os direitos reservados.</p>
        </div>
        <p className="mt-2">CNPJ: 54.088.912/0001-96</p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12 mt-16 mb-12 md:mr-12 cols-end-2 justify-self-end">
        <a href="/" className="hover:underline">
          Sobre a We Drive
        </a>
        <a href="https://linktr.ee/wedrivebrasil" className="hover:underline">
          Fale conosco
        </a>
      </div>
    </div>
  );
};

export default Footer;
