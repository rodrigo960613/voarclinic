import { Picture } from "./Picture";
import "./About.css";
export function About() {
  return <section id="sobre" className="section about" aria-labelledby="sobre-titulo">
      <div className="container about__grid">
        <div className="about__copy">
          <h2 id="sobre-titulo">Sobre a Voar Clinic</h2>
          <p className="about__lead">
            A Voar Clinic é uma clínica de psicologia conduzida pela psicóloga e neuropsicóloga Sylmara C. M. Jacobina.
            Aqui, cada pessoa é recebida com escuta atenta, respeito ao seu tempo e à sua história.
          </p>
          <p>
            As salas foram preparadas para acolher diferentes idades: um ambiente leve para as crianças, com brinquedos e
            materiais lúdicos, e um espaço tranquilo, com poltronas confortáveis, para os adultos.
          </p>
        </div>

        <div className="about__media">
          <Picture
            src="/images/fachada"
            alt="Fachada da Voar Clinic, com a vitrine adesivada e a psicóloga Sylmara em frente"
            width={992}
            height={1080}
            position="50% 50%"
          />
        </div>
      </div>
    </section>;
}
