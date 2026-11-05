import { useEffect, useRef } from "react";
import { Icon } from "./Icon";
import { clinic } from "../data/clinic";
export function PrivacyDialog({ open, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return <dialog
    ref={ref}
    className="dialog"
    aria-labelledby="priv-titulo"
    onClose={onClose}
    onClick={(e) => {
      if (e.target === ref.current) onClose();
    }}
  >
      <div className="dialog__box">
        <header>
          <h2 id="priv-titulo">Política de Privacidade</h2>
          <button type="button" className="dialog__close" onClick={onClose} aria-label="Fechar">
            <Icon name="close" size={22} />
          </button>
        </header>
        <div className="dialog__body">
          <p>
            Esta página explica, de forma simples, como a {clinic.name} trata os dados pessoais de quem usa este site,
            conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Controladora dos dados: {clinic.name}, CNPJ {clinic.cnpj}.
          </p>
          <h3>Quais dados coletamos</h3>
          <p>
            Apenas os que você informa no formulário de contato: nome, telefone ou e-mail, motivo do contato e mensagem.
            Pedimos que <strong>não envie informações clínicas, laudos ou exames</strong> por este canal.
          </p>
          <h3>Para que usamos</h3>
          <p>Somente para responder ao seu contato e orientar o agendamento. Não usamos seus dados para outras finalidades.</p>
          <h3>Base legal</h3>
          <p>Seu consentimento, dado ao marcar a caixa de concordância no formulário.</p>
          <h3>Compartilhamento</h3>
          <p>
            Ao enviar a mensagem, os dados podem passar pelo serviço de envio de formulários contratado pela clínica ou pelo
            WhatsApp, caso você escolha esse caminho. Não vendemos nem compartilhamos seus dados para publicidade.
          </p>
          <h3>Mapa e cookies</h3>
          <p>
            O mapa só é carregado depois que você permite. Ele é fornecido pelo Google, que pode coletar dados técnicos do
            seu aparelho. Para lembrar a sua escolha, guardamos um cookie próprio (voar_mapa_ok) por até 6 meses; você pode
            apagá-lo a qualquer momento pelo link abaixo do mapa ou nas configurações do navegador.
          </p>
          <h3>Por quanto tempo guardamos</h3>
          <p>Pelo tempo necessário para atender ao seu contato, ou até você pedir a exclusão.</p>
          <h3>Seus direitos</h3>
          <p>
            Você pode solicitar acesso, correção, exclusão dos seus dados e a revogação do consentimento a qualquer momento,
            pelo WhatsApp {clinic.whatsapp.display}
            {clinic.email ? ` ou pelo e-mail ${clinic.email}` : ""}.
          </p>
          <p className="dialog__meta">
            Responsável pelo tratamento: {clinic.responsible.name} ({clinic.responsible.crp}). Atualizada em outubro de 2026.
          </p>
        </div>
      </div>
    </dialog>;
}
