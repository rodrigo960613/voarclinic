import { Logo } from "./Logo";
import { clinic } from "../data/clinic";
import "./Footer.css";
export function Footer({ onOpenPrivacy }) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Clínica de psicologia com avaliação neuropsicológica. Um espaço de acolhimento, escuta e
            cuidado.
          </p>
        </div>
      </div>

      <div className="container footer__legal">
        <p>
          © {year} {clinic.name}. Responsável técnica: {clinic.responsible.name}, {clinic.responsible.role},{" "}
          {clinic.responsible.crp}. CNPJ: {clinic.cnpj}.
        </p>
        <button type="button" className="link-btn link-btn--light" onClick={onOpenPrivacy}>
          Política de Privacidade
        </button>
      </div>
    </footer>;
}
