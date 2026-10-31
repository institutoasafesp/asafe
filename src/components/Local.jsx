import { contato, instagramLink, mapaLink, whatsappLink } from '../data';
import { IconInstagram, IconPin, IconWhatsApp } from './Icons';

export default function Local() {
  return (
    <footer id="local" className="local">
      <div className="local__interno">
        <div>
          <h2>Onde estamos</h2>
          <address>
            <span className="local__rua">{contato.endereco}</span>
            <span className="local__bairro">{contato.bairro}</span>
          </address>
        </div>
        <ul className="local__links">
          <li>
            <a href={mapaLink} target="_blank" rel="noreferrer"><IconPin /> Abrir no Google Maps</a>
          </li>
          <li>
            <a href={whatsappLink('Olá, Instituto Asafe!')} target="_blank" rel="noreferrer">
              <IconWhatsApp /> {contato.whatsappLabel}
            </a>
          </li>
          <li>
            <a href={instagramLink} target="_blank" rel="noreferrer"><IconInstagram /> @{contato.instagram}</a>
          </li>
        </ul>
        <img className="local__logo" src="img/logo-vertical.svg" alt="Instituto Asafe" width="150" height="150" loading="lazy" />
      </div>
      <p className="local__credito">Desenvolvido por Eron Nogueira, 2026</p>
    </footer>
  );
}
