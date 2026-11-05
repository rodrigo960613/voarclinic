# Voar Clinic — Landing page

React + JavaScript (JSX) + Vite. Só `react` e `react-dom` em produção; ícones, logotipo provisório e a fonte Poppins estão dentro do projeto (sem CDN). Requer Node 18+.

## Como usar

```bash
npm install
npm run dev            # desenvolvimento
npm run build          # versão para publicar (dist/)
npm run build:single   # gera dist-single/voar-clinic.html e dist-static/
```

- `dist-single/voar-clinic.html`: **um único arquivo** (abre offline, bom para o celular ou WhatsApp).
- `dist-static/`: `index.html` + `app.css` + `app.js` + `images/` + `video/`; é só publicar a pasta em qualquer hospedagem.
- Formulário real: `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx npm run build:single`.

## Estrutura

```
index.html                 SEO, Open Graph, dados estruturados
scripts/build-single.mjs   gera o HTML único e a versão estática
public/images, public/video fotos, ilustração e vídeo da clínica
src/
  data/                    ← EDITE AQUI
    clinic.js              contatos, endereço, horários, CNPJ, responsável, Instagram, endpoint do formulário
    services.js            áreas atendidas       faq.js        perguntas frequentes
    v2.js                  cartões "Avaliação Neuropsicológica" e perguntas do questionário
    content.js             etapas "Como funciona"   instagram.js  publicações (vazio até haver conteúdo autorizado)
  components/              uma seção por arquivo (+ .css)
  consent.js               permissão do mapa guardada em cookie (reserva em localStorage)
  styles/                  tokens.css (cores), base.css (base) e polish.css (acabamento)
```

Campos vazios em `clinic.js` (telefone, e-mail) não aparecem no site.

## Imagens

| Arquivo | Onde aparece |
|---|---|
| `dra-sylmara` | "Especialista em avaliação neuropsicológica" |
| `fachada` | "Sobre a Voar Clinic" |
| `cerebro-borboletas.webp` | topo do site (ilustração com fundo transparente) |
| `video-capa.jpg` | capa do vídeo da clínica |

Fotos em WebP + JPG, com os mesmos nomes. O vídeo (`tour-clinica.mp4`) tem áudio; o visitante usa os controles.

## Formulário e mapa

- Valida nome, contato, motivo, mensagem e consentimento (LGPD). Sem marcar o consentimento, aparece um aviso.
- Com `VITE_FORM_ENDPOINT`: envia por POST e só diz "enviada" se o servidor confirmar. Sem endpoint: abre o WhatsApp com a mensagem pronta.
- O mapa do Google só carrega depois de o visitante permitir; a escolha fica no cookie `voar_mapa_ok` (180 dias).

## A confirmar antes de publicar

- WhatsApp, CRP e nome vieram do vídeo oficial; endereço e horários, da ficha do Google Maps; CNPJ e a apresentação da profissional foram informados pela clínica.
- A foto da fachada mostra CRP e telefone diferentes dos do site: conferir qual é o correto.
- Descrições das áreas, FAQ, questionário e etapas são textos gerais: a profissional deve revisar.
- Política de Privacidade é um modelo: peça revisão jurídica.
- Logotipo oficial (o atual é provisório), `og:image` e `og:url` com URLs absolutas após definir o domínio.
