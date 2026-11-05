import { useEffect, useState } from "react";
import { whatsappLink } from "../data/clinic";
import "./WhatsAppButton.css";
const KEY = "voar-wa-teaser";
function seen() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}
function remember() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
  }
}
function WaGlyph() {
  return <svg viewBox="0 0 32 32" width="38" height="38" aria-hidden="true" focusable="false">
      <path
    fill="currentColor"
    d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.28.64 4.42 1.76 6.24L4 29l8.04-1.7a12.1 12.1 0 0 0 3.99.68C22.67 27.98 28 22.6 28 16 28 9.4 22.68 3 16.04 3Zm0 22.3c-1.3 0-2.56-.28-3.7-.8l-.42-.2-4.2.9.92-4.04-.28-.44a9.4 9.4 0 0 1-1.46-5.06c0-5.2 4.3-9.4 9.54-9.4 5.2 0 9.46 4.2 9.46 9.4 0 5.2-4.26 9.64-9.86 9.64Zm5.24-7.04c-.28-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.64.14-.2.28-.74.94-.9 1.12-.16.2-.34.22-.62.08-.28-.14-1.2-.44-2.28-1.4-.84-.74-1.4-1.66-1.58-1.94-.16-.28-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.2.04-.36-.02-.5-.08-.14-.64-1.54-.88-2.1-.22-.54-.46-.46-.64-.48h-.54c-.2 0-.5.08-.76.36-.26.28-1 .98-1 2.4s1.04 2.78 1.18 2.98c.14.2 2.04 3.1 4.94 4.34.7.3 1.24.48 1.66.62.7.22 1.32.18 1.82.12.56-.08 1.7-.7 1.94-1.36.24-.68.24-1.26.16-1.38-.06-.12-.26-.2-.54-.34Z"
  />
    </svg>;
}
export function WhatsAppButton() {
  const [teaser, setTeaser] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };
  useEffect(() => {
    if (seen()) return;
    const show = window.setTimeout(() => setTeaser(true), 7e3);
    return () => window.clearTimeout(show);
  }, []);
  useEffect(() => {
    if (!teaser) return;
    const hide = window.setTimeout(() => {
      setTeaser(false);
      remember();
    }, 14e3);
    return () => window.clearTimeout(hide);
  }, [teaser]);
  const dismiss = () => {
    setTeaser(false);
    remember();
  };
  return <div className="wa">
      {teaser && <div className="wa__teaser" role="status">
          <p>
            <strong>Precisa de ajuda?</strong>
            <span>Tire dúvidas ou agende um atendimento pelo WhatsApp.</span>
          </p>
          <button type="button" className="wa__x" onClick={dismiss} aria-label="Fechar convite do WhatsApp">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>}
      <button
    type="button"
    className={`wa__top${showTop ? " is-visible" : ""}`}
    onClick={toTop}
    aria-label="Voltar ao início da página"
    tabIndex={showTop ? 0 : -1}
    aria-hidden={showTop ? void 0 : true}
  >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
          <path d="M12 19V5M5.5 11.5L12 5l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <a
    className="wa__btn"
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => remember()}
    aria-label="Falar com a Voar Clinic pelo WhatsApp (abre em nova aba)"
  >
        <WaGlyph />
        <span className="wa__tip" aria-hidden="true">Fale conosco</span>
        <span className="sr-only">Fale pelo WhatsApp</span>
      </a>
    </div>;
}
