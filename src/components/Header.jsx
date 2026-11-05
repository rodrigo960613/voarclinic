import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { useScrolled } from "../hooks";
import { whatsappLink } from "../data/clinic";
import "./Header.css";
const links = [
  { id: "sobre", label: "Sobre" },
  { id: "especialidades", label: "Atendimento" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" }
];
const agendar = "Olá! Gostaria de agendar um atendimento na Voar Clinic.";
export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 960px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return <header className={`header${scrolled ? " header--scrolled" : ""}${open ? " header--open" : ""}`}>
      <div className="container">
        <div className="header__bar">
          <a href="#inicio" className="header__logo" aria-label="Voar Clinic, ir para o início" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav id="menu-principal" className="header__nav" aria-label="Navegação principal">
            <ul>
              {links.map((l) => <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>)}
            </ul>
            <Button href={whatsappLink(agendar)} external className="header__cta--mobile" variant="light" size="lg" onClick={() => setOpen(false)}>
              Agendar consulta
            </Button>
          </nav>

          <div className="header__actions">
          <Button href={whatsappLink(agendar)} external className="header__cta--desktop" variant="secondary">
            Agendar consulta
          </Button>

          <button
    type="button"
    className="header__toggle"
    aria-expanded={open}
    aria-controls="menu-principal"
    aria-label={open ? "Fechar menu" : "Abrir menu"}
    onClick={() => setOpen((v) => !v)}
  >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
          </div>
        </div>
      </div>
    </header>;
}
