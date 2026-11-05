import { useState } from "react";
import { Button } from "./Button";
import { clinic } from "../data/clinic";
import { hasMapConsent, setMapConsent } from "../consent";
export function MapConsent({ onOpenPrivacy }) {
  const [allowed, setAllowed] = useState(() => hasMapConsent());
  const allow = () => {
    setMapConsent(true);
    setAllowed(true);
  };
  const revoke = () => {
    setMapConsent(false);
    setAllowed(false);
  };
  if (allowed) {
    return <>
        <div className="contact__map">
          <iframe
      title="Mapa com a localização da Voar Clinic"
      src={clinic.mapEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
        </div>
        <button type="button" className="link-btn contact__revoke" onClick={revoke}>
          Ocultar o mapa e apagar minha permissão
        </button>
      </>;
  }
  return <div className="contact__map contact__map--ask" role="region" aria-label="Permissão para exibir o mapa">
      <p>
        <strong>Mostrar o mapa?</strong>
        Ele é carregado pelo Google, que pode coletar dados do seu aparelho. Se você permitir, guardamos sua escolha em um
        cookie neste navegador por 6 meses.{" "}
        {onOpenPrivacy && <button type="button" className="link-btn" onClick={onOpenPrivacy}>
            Política de Privacidade
          </button>}
      </p>
      <div className="contact__map-actions">
        <Button variant="dark" onClick={allow}>
          Permitir e mostrar o mapa
        </Button>
      </div>
    </div>;
}
