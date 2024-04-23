"use client";

import React, { useState } from "react";
import Input from "../components/ui/input";
import InputMask from "react-input-mask";

const TalkToUsPage: React.FC = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    accessKey: "a970859a-6dda-46a1-a3ed-c4bc27282ee7",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async ( e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
        const res = await fetch("https://api.staticforms.xyz/submit", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: { "Content-Type": "application/json" },
            });

            const json = await res.json();

            if (json.success) {
                alert("Mensagem enviada com sucesso!");
            } else {
                alert("Erro ao enviar mensagem. Tente novamente.");
            }
        } catch (e) {
            console.log("An error occurred", e);
            alert("Erro ao enviar mensagem. Tente novamente.");
        }
    
    }

  return (
    <div className="mt-44 mb-16 flex flex-col items-center justify-center bg-stone-700 w-96 h-[28rem] rounded-lg">
      <h1 className="font-bold text-white text-2xl">Fale Conosco</h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        action="https://api.staticforms.xyz/submit"
        className="flex gap-3 flex-col justify-center items-center"
      >
        <input
          type="hidden"
          name="accessKey"
          value="a970859a-6dda-46a1-a3ed-c4bc27282ee7"
        />
        <div>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            required
            onChange={handleChange}
            className="mt-3"
            error={submitted && !contact.name ? 'Este campo é obrigatório' : null}
          />
        </div>
        <div>
          <InputMask
            mask={"(99) 99999-9999"}
            name="phone"
            placeholder="Telefone"
            onChange={handleChange}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-3"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="E-mail"
            required
            onChange={handleChange}
            className="mt-3"
            name="email"
            error={submitted && !contact.name ? 'Este campo é obrigatório' : null}
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder="Message"
            required
            name="message"
            className="border-2 border-gray-300 bg-white h-32 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-3"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="border pointer border-black w-28 h-10 rounded-lg font-bold md:hover:bg-yellow-500 bg-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TalkToUsPage;
