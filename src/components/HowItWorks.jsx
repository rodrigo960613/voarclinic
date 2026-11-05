import { SectionHeading } from "./SectionHeading";
import { steps } from "../data/content";
import "./HowItWorks.css";
export function HowItWorks() {
  return <section id="como-funciona" className="section how" aria-labelledby="como-titulo">
      <div className="container">
        <SectionHeading
    id="como-titulo"
    title="Do primeiro contato ao acompanhamento"
    lead="Um caminho simples para você começar com tranquilidade."
  />
        <ol className="how__steps">
          {steps.map((s, i) => <li key={s.title} className="step">
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>
                <span className="sr-only">Passo {i + 1}: </span>
                {s.title}
              </h3>
              <p>{s.text}</p>
            </li>)}
        </ol>
      </div>
    </section>;
}
