import { useEffect, useState } from "react";
import { Button } from "./Button";
import { clinic, whatsappLink } from "../data/clinic";
import { services } from "../data/services";
const initial = { nome: "", contato: "", motivo: "", mensagem: "", consentimento: false, site: "" };
const reasons = [
  ...services.map((s) => s.title),
  "Primeira conversa / dúvidas",
  "Outro assunto"
];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validate(v) {
  const e = {};
  if (v.nome.trim().length < 2) e.nome = "Informe seu nome.";
  const digits = v.contato.replace(/\D/g, "");
  if (!v.contato.trim()) e.contato = "Informe um telefone ou e-mail para retornarmos.";
  else if (!emailRe.test(v.contato.trim()) && digits.length < 10)
    e.contato = "Digite um e-mail válido ou um telefone com DDD.";
  if (!v.motivo) e.motivo = "Escolha o motivo do contato.";
  if (v.mensagem.trim().length < 10) e.mensagem = "Escreva uma mensagem curta (mínimo de 10 caracteres).";
  if (!v.consentimento) e.consentimento = "É necessário concordar para enviarmos sua mensagem.";
  return e;
}
export function ContactForm({ onOpenPrivacy }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [waUrl, setWaUrl] = useState("");
  const [toast, setToast] = useState(false);
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(false), 6e3);
    return () => window.clearTimeout(t);
  }, [toast]);
  const onChange = (e) => {
    const { name, value, type } = e.target;
    const next = type === "checkbox" ? e.target.checked : value;
    setValues((prev) => ({ ...prev, [name]: next }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: void 0 }));
    if (name === "consentimento" && next === true) setToast(false);
  };
  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (values.site) return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      if (found.consentimento) setToast(true);
      const first = Object.keys(found)[0];
      document.getElementById(`campo-${first}`)?.focus();
      return;
    }
    if (clinic.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(clinic.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            nome: values.nome.trim(),
            contato: values.contato.trim(),
            motivo: values.motivo,
            mensagem: values.mensagem.trim(),
            origem: "site-voar-clinic"
          })
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus("success");
        setValues(initial);
      } catch {
        setStatus("error");
      }
      return;
    }
    const text = `Olá! Meu nome é ${values.nome.trim()}.
Motivo do contato: ${values.motivo}.
${values.mensagem.trim()}
Para retorno: ${values.contato.trim()}`;
    const url = whatsappLink(text);
    setWaUrl(url);
    setStatus("whatsapp");
    window.open(url, "_blank", "noopener");
  };
  const field = (name) => ({
    id: `campo-${name}`,
    name,
    "aria-invalid": errors[name] ? true : void 0,
    "aria-describedby": errors[name] ? `erro-${name}` : void 0,
    onChange
  });
  return <form className="form" onSubmit={onSubmit} noValidate aria-describedby="form-aviso">
      <p id="form-aviso" className="form__notice">
        Para o primeiro contato, pedimos apenas o essencial. Não envie informações clínicas ou exames por aqui.
      </p>

      <div className="form__row">
        <label htmlFor="campo-nome">Nome</label>
        <input {...field("nome")} type="text" autoComplete="name" value={values.nome} />
        {errors.nome && <p className="form__error" id="erro-nome">{errors.nome}</p>}
      </div>

      <div className="form__row">
        <label htmlFor="campo-contato">Telefone ou e-mail</label>
        <input {...field("contato")} type="text" inputMode="email" autoComplete="email tel" value={values.contato} />
        {errors.contato && <p className="form__error" id="erro-contato">{errors.contato}</p>}
      </div>

      <div className="form__row">
        <label htmlFor="campo-motivo">Motivo do contato</label>
        <select {...field("motivo")} value={values.motivo}>
          <option value="">Selecione…</option>
          {reasons.map((r) => <option key={r} value={r}>
              {r}
            </option>)}
        </select>
        {errors.motivo && <p className="form__error" id="erro-motivo">{errors.motivo}</p>}
      </div>

      <div className="form__row">
        <label htmlFor="campo-mensagem">Mensagem</label>
        <textarea {...field("mensagem")} rows={4} value={values.mensagem} />
        {errors.mensagem && <p className="form__error" id="erro-mensagem">{errors.mensagem}</p>}
      </div>

      {
    /* Campo-isca: invisível para pessoas, preenchido apenas por robôs. */
  }
      <div className="form__trap" aria-hidden="true">
        <label htmlFor="campo-site">Não preencha este campo</label>
        <input id="campo-site" name="site" type="text" tabIndex={-1} autoComplete="off" value={values.site} onChange={onChange} />
      </div>

      <div className="form__row form__row--check">
        <input
    {...field("consentimento")}
    type="checkbox"
    checked={values.consentimento}
  />
        <label htmlFor="campo-consentimento">
          Concordo em compartilhar estes dados para receber retorno da clínica, conforme a{" "}
          <button type="button" className="link-btn" onClick={onOpenPrivacy}>
            Política de Privacidade
          </button>
          .
        </label>
        {errors.consentimento && <p className="form__error" id="erro-consentimento">{errors.consentimento}</p>}
      </div>

      {toast && <div className="toast" role="alert">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5v5.5M12 16.2v.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>Para enviar sua mensagem, é preciso marcar que você concorda em compartilhar seus dados.</p>
          <button type="button" onClick={() => setToast(false)} aria-label="Fechar aviso">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>}

      <Button type="submit" size="lg" icon="arrow" disabled={status === "sending"} className="form__submit">
        {status === "sending" ? "Enviando…" : clinic.formEndpoint ? "Enviar mensagem" : "Continuar pelo WhatsApp"}
      </Button>

      <div className="form__status" role="status" aria-live="polite">
        {status === "success" && <p className="form__ok">Mensagem enviada. Retornaremos o contato assim que possível.</p>}
        {status === "whatsapp" && <p className="form__ok">
            Abrimos o WhatsApp com a sua mensagem pronta. Ela só é enviada quando você tocar em enviar por lá.{" "}
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              Abrir o WhatsApp novamente
            </a>
            .
          </p>}
        {status === "error" && <p className="form__fail" role="alert">
            Não foi possível enviar agora. Tente novamente ou fale conosco direto pelo{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>}
      </div>
    </form>;
}
