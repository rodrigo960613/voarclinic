import { Icon } from "./Icon";
import { services, servicesIntro } from "../data/services";
import { whatsappLink } from "../data/clinic";
import "./V2.css";
export function Help() {
  return <section id="especialidades" className="section help" aria-labelledby="ajuda-titulo">
      <div className="container">
        <header className="v2head">
          <h2 id="ajuda-titulo">Como posso te ajudar</h2>
          <p className="lead">{servicesIntro.lead}</p>
        </header>
        <ul className="cards">
          {services.map((s, i) => <li key={s.id} className="card">
              <span className="card__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <Icon name={s.icon} size={28} strokeWidth={1.4} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a
    href={whatsappLink(`Olá! Gostaria de saber mais sobre a avaliação para: ${s.title}.`)}
    target="_blank"
    rel="noopener noreferrer"
  >
                Saber mais <Icon name="arrow" size={16} />
                <span className="sr-only"> sobre {s.title} (abre o WhatsApp)</span>
              </a>
            </li>)}
        </ul>
      </div>
    </section>;
}
