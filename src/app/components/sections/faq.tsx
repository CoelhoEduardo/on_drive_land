import Collapse from "../ui/collapse";

export const Faq = ({ nav_id }: { nav_id: string }) => {
  return (
    <section id={nav_id} className={`flex flex-col text-sm md:text-xl mt-24 mb-32`}>
      <div>
        <div className="justify-center flex mt-3 mb-5">
          <h2 className="text-white font-semibold text-xl md:text-3xl">
            Dúvidas frequentes
          </h2>
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
          question="Qual o tempo mínimo que eu posso agendar um motorista?"
          ans="Nosso tempo mínimo de agendamento é 1 hora. O incremento mínimo é de 30 minutos, a partir da primeira hora."
        />
      </div>
    </section>
  );
};
