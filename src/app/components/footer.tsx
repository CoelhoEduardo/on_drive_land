import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoCar, IoLocation } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div className="font-semibold bg-gray-200 text-black">
      <div className=" grid grid-cols-2 w-full z-10 p-5 mt-12">
        <div className="text-sm gap-3 md:text-base flex mt-6  md:ml-12">
          <div
            itemScope
            itemType="http://schema.org/LocalBusiness"
            className="flex flex-col gap-3"
          >
            <div className="md:flex gap-1 text-gray-900">
              <IoCar className="mt-1"/>
              <h2>
                <span itemProp="name">We Drive</span>
              </h2>
              <h3>
                <span itemProp="alternateName">
                  - Motorista particular por uma fração de custo!
                </span>
              </h3>
            </div>
            <span
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
              className="md:flex gap-1 items-center"
            >
              <IoLocation />
              <span itemProp="streetAddress">Rua dos Pinheiros, 498 - </span>
              <span itemProp="addressLocality">São Paulo</span> -{" "}
              <span itemProp="addressRegion">SP</span>
            </span>
            <div className="md:flex gap-1">
              <FiPhone />Telefone:{" "}
              <span itemProp="telephone">
                (11) 99982-2654 | (11) 98717-6109
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mr-12 cols-end-2 flex justify-self-end flex-col gap-3">
          <div className="text-sm md:text-base flex md:flex-row text-end flex-col gap-3 md:gap-12 ">
            <Link href="/" className="hover:underline">
              Sobre a We Drive
            </Link>
            <Link
              href="https://linktr.ee/wedrivebrasil"
              className="hover:underline"
            >
              Fale conosco
            </Link>
          </div>
          <div className="mr-3 flex gap-3 justify-end">
            <Link
              href=" https://www.instagram.com/wedrivebrasil/"
              className="hover:underline"
            >
              <BsInstagram />
            </Link>
            <Link
              href=" https://www.linkedin.com/company/we-drive-brasil/"
              className="hover:underline"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t mt-3 border-gray-700 flex justify-center items-center">
        <div className="flex gap-2 mt-3 mb-10">
          <h2>We Drive Brasil Ltda. </h2>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
