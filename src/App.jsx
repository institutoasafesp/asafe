import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Acoes from './components/Acoes';
import Inscricao from './components/Inscricao';
import Apoiar from './components/Apoiar';
import Local from './components/Local';
import { IconWhatsApp } from './components/Icons';
import { mensagemInscricao, whatsappLink } from './data';

// No celular, a barra fixa só aparece depois do hero, que já tem os próprios botões
function useHeroVisivel() {
  const [visivel, setVisivel] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting));
    observer.observe(document.getElementById('inicio'));
    return () => observer.disconnect();
  }, []);
  return visivel;
}

export default function App() {
  const heroVisivel = useHeroVisivel();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projetos />
        <Acoes />
        <Inscricao />
        <Apoiar />
      </main>
      <Local />
      <div className="barra-celular" hidden={heroVisivel}>
        <a className="botao" href={whatsappLink(mensagemInscricao)} target="_blank" rel="noreferrer">
          <IconWhatsApp /> Inscrever pelo WhatsApp
        </a>
      </div>
    </>
  );
}
