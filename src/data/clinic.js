export const clinic = {
  name: "Voar Clinic",
  tagline: "Clínica de Psicologia",
  // Lido no adesivo da fachada (vídeo). CONFIRMAR.
  responsible: {
    name: "Sylmara C. M. Jacobina",
    role: "Psicóloga e Neuropsicóloga",
    crp: "CRP 11/21014",
    bio: "Psicóloga graduada pela UFPI, com 10 anos de experiência na prática clínica e 8 anos de especialização em Neuropsicologia. Atua em Avaliação Neuropsicológica, com olhar científico e individualizado, para compreender aspectos cognitivos, emocionais e comportamentais."
  },
  cnpj: "56.414.848/0001-11",
  // informado pela clínica
  // Número exibido no adesivo da fachada, com o ícone de WhatsApp. CONFIRMAR (DDI 55 assumido).
  whatsapp: {
    number: "5585998366826",
    display: "(85) 9 9836-6826",
    defaultMessage: "Olá! Vim pelo site da Voar Clinic e gostaria de saber mais sobre os atendimentos."
  },
  // PREENCHER quando a clínica informar. Se ficarem vazios, não aparecem no site.
  phone: "",
  email: "",
  // Endereço e horários vistos na ficha da clínica no Google Maps (captura enviada pela clínica).
  address: "Rua Tipógrafo Sales, 112 – Parquelândia, Fortaleza – CE",
  mapsUrl: "https://maps.app.goo.gl/QoXsTcvczad9PJVf7",
  // "Como chegar" (abre o Google Maps)
  mapEmbedUrl: "https://www.google.com/maps?q=Rua+Tip%C3%B3grafo+Sales%2C+112%2C+Parquel%C3%A2ndia%2C+Fortaleza+-+CE&output=embed",
  hours: "",
  // texto livre opcional; a tabela abaixo é a que aparece no site
  hoursList: [
    { day: "Segunda a sexta", time: "13h às 18h" },
    { day: "Sábado", time: "9h às 12h" },
    { day: "Domingo", time: "Fechado" }
  ],
  instagram: {
    handle: "neuropsicologasylmarajacobina",
    url: "https://www.instagram.com/neuropsicologasylmarajacobina/"
  },
  /**
   * Endpoint do formulário (Formspree, Getform, Basin ou backend próprio).
   * Defina em um arquivo .env: VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx
   * Sem endpoint, o formulário abre o WhatsApp com a mensagem pronta (e não afirma que enviou).
   */
  formEndpoint: import.meta.env?.VITE_FORM_ENDPOINT ?? ""
};
export function whatsappLink(message = clinic.whatsapp.defaultMessage) {
  return `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
