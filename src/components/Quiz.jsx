import { useState } from "react";
import { Button } from "./Button";
import { quizQuestions, quizOptions } from "../data/v2";
import { whatsappLink } from "../data/clinic";
import "./V2.css";
export function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const total = quizQuestions.length;
  const done = step >= total;
  const max = total * 3;
  const answer = (v) => {
    setScore((s) => s + v);
    setStep((s) => s + 1);
  };
  const restart = () => {
    setStep(0);
    setScore(0);
  };
  const high = score >= max * 0.45;
  return <section id="reflexao" className="section quiz" aria-labelledby="quiz-titulo">
      <div className="container quiz__grid">
        <header className="v2head">
          <h2 id="quiz-titulo">Está na hora de cuidar de você com mais atenção?</h2>
          <p className="lead">
            Responda a {total} perguntas rápidas para refletir. Não é um teste clínico e não gera diagnóstico: serve só para
            ajudar você a decidir se vale conversar com a clínica.
          </p>
        </header>

        <div className="quiz__box" aria-live="polite">
          {!done ? <>
              <div className="quiz__bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step} aria-label="Progresso">
                <span style={{ width: `${step / total * 100}%` }} />
              </div>
              <p className="quiz__count">
                Pergunta {step + 1} de {total}
              </p>
              <p className="quiz__q">{quizQuestions[step]}</p>
              <div className="quiz__opts">
                {quizOptions.map((o) => <button key={o.label} type="button" onClick={() => answer(o.v)}>
                    {o.label}
                  </button>)}
              </div>
            </> : <div className="quiz__result">
              <p className="quiz__q">
                {high ? "Vale a pena conversar com a clínica." : "Você pode tirar suas dúvidas quando quiser."}
              </p>
              <p>
                {high ? "Suas respostas indicam que uma conversa pode ajudar a entender o que está acontecendo e quais são os próximos passos." : "Pelas suas respostas, não parece haver urgência, mas, se algo ainda preocupa você, uma conversa pode esclarecer."}{" "}
                Este resultado não é um diagnóstico.
              </p>
              <div className="quiz__actions">
                <Button
    href={whatsappLink("Olá! Respondi às perguntas de reflexão no site e gostaria de conversar com a clínica.")}
    external
    icon="message"
  >
                  Conversar pelo WhatsApp
                </Button>
                <Button variant="secondary" onClick={restart}>
                  Refazer
                </Button>
              </div>
            </div>}
        </div>
      </div>
    </section>;
}
