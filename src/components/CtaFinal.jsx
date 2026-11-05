import { Button } from "./Button";
import { Butterfly } from "./Logo";
import { whatsappLink } from "../data/clinic";
import "./CtaFinal.css";
export function CtaFinal() {
  return <section className="cta" aria-labelledby="cta-titulo">
      <div className="container">
        <div className="cta__box">
          <Butterfly className="cta__fly" size={220} />
          <h2 id="cta-titulo">Seu próximo passo começa com uma conversa.</h2>
          <p>
            Entre em contato com a Voar Clinic para conhecer as opções de atendimento e receber as orientações
            necessárias.
          </p>
          <Button href={whatsappLink()} external variant="light" size="lg" icon="message">
            Fale com nossa equipe
          </Button>
        </div>
      </div>
    </section>;
}
