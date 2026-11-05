import { why } from "../data/v2";
import "./V2.css";
export function Why() {
  return <section className="section why" aria-labelledby="porque-titulo">
      <div className="container">
        <header className="v2head">
          <h2 id="porque-titulo">Avaliação Neuropsicológica</h2>
          <p className="lead">Compreendendo o funcionamento cognitivo de forma integral.</p>
        </header>
        <ul className="cards cards--3">
          {why.map((w) => <li key={w.n} className="card card--plain">
              <span className="card__big" aria-hidden="true">{w.n}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>)}
        </ul>
      </div>
    </section>;
}
