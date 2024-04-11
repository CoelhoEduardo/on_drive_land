import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white grid grid-cols-2 w-full z-10 p-5 mt-12">
      <div className="flex flex-col mt-16 mb-5 md:ml-12">
        <div className="flex md:flex-row flex-col gap-2">
          <h1>We Drive Brasil Ltda. </h1>
          <p>Todos os direitos reservados.</p>
        </div>
        <p className="mt-2">CNPJ: 54.088.912/0001-96</p>
      </div>
      <div className="mt-16 mb-12 md:mr-12 cols-end-2 flex justify-self-end flex-col gap-3">
        <div className=" flex md:flex-row flex-col md:gap-12 ">
          <a href="/" className="hover:underline">
            Sobre a We Drive
          </a>
          <a href="https://linktr.ee/wedrivebrasil" className="hover:underline">
            Fale conosco
          </a>
        </div>
        <div className=" flex gap-3 justify-end">
          <a
            href=" https://www.instagram.com/wedrivebrasil/"
            className="hover:underline"
          >
            <BsInstagram />
          </a>
          <a
            href=" https://www.instagram.com/wedrivebrasil/"
            className="hover:underline"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
