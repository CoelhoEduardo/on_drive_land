import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="font-semibold bg-gray-200 text-black">
      <div className=" grid grid-cols-2 w-full z-10 p-5 mt-12">
        <div className="text-sm gap-3 md:text-base flex flex-col mt-6  md:ml-12">
          <p>CNPJ: 54.088.912/0001-96</p>
          <p>Endereço: Rua dos Pinheiros, 498 - Pinheiros - SP</p>
        </div>
        <div className="mt-6 md:mr-12 cols-end-2 flex justify-self-end flex-col gap-3">
          <div className="text-sm md:text-base flex md:flex-row text-end flex-col gap-3 md:gap-12 ">
            <a href="/" className="hover:underline">
              Sobre a We Drive
            </a>
            <a
              href="https://linktr.ee/wedrivebrasil"
              className="hover:underline"
            >
              Fale conosco
            </a>
          </div>
          <div className="mr-3 flex gap-3 justify-end">
            <a
              href=" https://www.instagram.com/wedrivebrasil/"
              className="hover:underline"
            >
              <BsInstagram />
            </a>
            <a
              href=" https://www.linkedin.com/company/we-drive-brasil/"
              className="hover:underline"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t mt-3 border-gray-700 flex justify-center items-center">
        <div className="flex gap-2 mt-3 mb-10">
          <h1>We Drive Brasil Ltda. </h1>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
