import { Button } from "./Button";
import { whatsappLink } from "../data/clinic";
import { asset } from "../assets";
import "./Hero.css";
export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">Psicologia • Neuropsicologia • Avaliação</p>
          <h1 id="hero-title">Cuidar da mente é abrir espaço para novos caminhos.</h1>
          <p className="hero__subtitle">
            Um espaço de acolhimento, escuta e cuidado, pensado para promover o bem-estar e o desenvolvimento em cada
            fase da vida.
          </p>
          <div className="hero__actions">
            <Button href={whatsappLink()} external size="lg">
              Agendar consulta
            </Button>
            <Button href="#sobre" variant="secondary" size="lg">
              Saiba mais
            </Button>
          </div>
        </div>

        <div className="hero__art">
          <img
            className="hero__img"
            src={asset("/images/cerebro-borboletas.webp")}
            alt="Ilustração de um cérebro em linhas delicadas de onde saem borboletas voando"
            width={1008}
            height={1049}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>;
}
