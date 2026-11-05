import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { InstagramFeed } from "./components/InstagramFeed";
import { Credibility } from "./components/Credibility";
import { Help } from "./components/Help";
import { Quiz } from "./components/Quiz";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { CtaFinal } from "./components/CtaFinal";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { PrivacyDialog } from "./components/PrivacyDialog";
export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const openPrivacy = useCallback(() => setPrivacyOpen(true), []);
  const closePrivacy = useCallback(() => setPrivacyOpen(false), []);
  return <>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Credibility />
        <About />
        <Help />
        <HowItWorks />
        <Quiz />
        <InstagramFeed />
        <CtaFinal />
        <Faq />
        <Contact onOpenPrivacy={openPrivacy} />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      <WhatsAppButton />
      <PrivacyDialog open={privacyOpen} onClose={closePrivacy} />
    </>;
}
