import { SectionHeading } from "./SectionHeading";
import { faq } from "../data/faq";
import "./Faq.css";
export function Faq() {
  return <section id="duvidas" className="section faq" aria-labelledby="duvidas-titulo">
      <div className="container faq__grid">
        <SectionHeading id="duvidas-titulo" title="Perguntas frequentes" lead="Respostas rápidas para as dúvidas mais comuns antes do primeiro contato." />
        <div className="faq__list">
          {faq.map((f) => <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </summary>
              <p>{f.a}</p>
            </details>)}
        </div>
      </div>
    </section>;
}
