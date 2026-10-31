import { mensagemInscricao, whatsappLink } from '../data';

export default function Header() {
  return (
    <header className="topo">
      <div className="topo__interno">
        <a href="#inicio" aria-label="Instituto Asafe, início">
          <img className="topo__logo" src="img/logo-horizontal-escuro.svg" alt="" width="124" height="46" />
        </a>
        <nav aria-label="Principal">
          <a href="#projetos">Projetos</a>
          <a href="#acoes">Ações</a>
          <a href="#inscricao">Inscrição</a>
          <a href="#apoiar">Como apoiar</a>
          <a href="#local">Onde estamos</a>
        </nav>
        <a className="botao botao--pequeno" href={whatsappLink(mensagemInscricao)} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
