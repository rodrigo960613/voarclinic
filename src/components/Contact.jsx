import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";
import { MapConsent } from "./MapConsent";
import { clinic, whatsappLink } from "../data/clinic";
import "./Contact.css";
export function Contact({ onOpenPrivacy }) {
  const items = [
    { icon: "message", label: "WhatsApp", value: clinic.whatsapp.display, href: whatsappLink() },
    ...clinic.phone ? [{ icon: "phone", label: "Telefone", value: clinic.phone, href: `tel:${clinic.phone.replace(/\D/g, "")}` }] : [],
    ...clinic.email ? [{ icon: "mail", label: "E-mail", value: clinic.email, href: `mailto:${clinic.email}` }] : [],
    ...clinic.address ? [{ icon: "pin", label: "Endereço", value: clinic.address, href: clinic.mapsUrl || void 0 }] : [],
    ...clinic.hours ? [{ icon: "clock", label: "Horários", value: clinic.hours }] : []
  ];
  return <section id="contato" className="section contact" aria-labelledby="contato-titulo">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading
    id="contato-titulo"
    title="Vamos conversar?"
    lead="Escolha o canal que for mais confortável. Respondemos para orientar os próximos passos."
  />
          <ul className="contact__list">
            {items.map((it) => <li key={it.label}>
                <span className="contact__icon">
                  <Icon name={it.icon} size={20} />
                </span>
                <div>
                  <p className="contact__label">{it.label}</p>
                  {it.href ? <a
    href={it.href}
    {...it.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}}
  >
                      {it.value}
                    </a> : <p>{it.value}</p>}
                </div>
              </li>)}
          </ul>

          {clinic.mapEmbedUrl && <MapConsent onOpenPrivacy={onOpenPrivacy} />}

          {clinic.hoursList.length > 0 && <div className="contact__hours">
              <h3>Horário de funcionamento</h3>
              <dl>
                {clinic.hoursList.map((h) => <div key={h.day}>
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>)}
              </dl>
            </div>}
        </div>

        <div className="contact__form">
          <h3>Envie uma mensagem</h3>
          <ContactForm onOpenPrivacy={onOpenPrivacy} />
        </div>
      </div>
    </section>;
}
