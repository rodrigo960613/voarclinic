import { Picture } from "./Picture";
import { clinic } from "../data/clinic";
import "./V2.css";
export function Credibility() {
  return <section id="especialista" className="cred" aria-labelledby="cred-titulo">
      <div className="container cred__grid">
        <div className="cred__photo">
          <Picture
    src="/images/dra-sylmara"
    alt="Sylmara C. M. Jacobina, psicóloga e neuropsicóloga responsável pela Voar Clinic"
    width={1101}
    height={976}
    position="50% 12%"
  />
        </div>
        <div>
          <h2 id="cred-titulo">Especialista em avaliação neuropsicológica</h2>
          <p>
            {clinic.responsible.name} · {clinic.responsible.role} · {clinic.responsible.crp}
          </p>
          <p className="cred__bio">{clinic.responsible.bio}</p>
          <ul className="cred__tags">
            <li>Atendimento para crianças</li>
            <li>Atendimento para adultos</li>
            <li>Escuta e acolhimento</li>
          </ul>
        </div>
      </div>
    </section>;
}
