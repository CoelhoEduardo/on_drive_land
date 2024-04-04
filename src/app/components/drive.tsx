import React from "react";
import Collapse from "./ui/collapse";

type Props = {
  nav_id: string;
};

const Drive: React.FC<Props> = (props) => {
  return (
    <section
      id={props.nav_id}
      className={`flex flex-col text-sm md:text-2xl mt-24`}
    >
      <div>
        <div className="justify-center flex mt-3 mb-5">
          <h3 className="text-white font-semibold text-2xl md:text-4xl">
            Dúvidas frequentes
          </h3>
        </div>
        <Collapse
          question="Posso usar o motorista da We Drive para uma viagem esporádica?"
          ans="Sim. Basta acessar a agenda do seu motorista e verificar se ele tem o seu horário livre. Faça seu agendamento pelo nosso whatsapp ou diretamente com o mostorista."
        />
        <Collapse
          question="Qual(is) a(s) forma(s) de pagamento aceita?"
          ans="Os mensalistas vão receber um link para cadastro e pagamento via cartão de crédito. A contratação avulsa pode ser paga em pix ou cartão de crédito."
        />
        <Collapse
          question="A We Drive possui seguro ?"
          ans="Sim. Você pode pedir nossa apólice de seguro vigente pelo canal de atendimento do whatsapp."
        />
        <Collapse
          question="Qual o tempo mínimo que eu posso agendar um motorista?"
          ans="Nosso tempo mínimo de agendamento é 1 hora. O incremento mínimo é de 30 minutos, a partir da primeira hora."
        />
      </div>
    </section>
  );
};

export default Drive;
