import { apoios, whatsappLink } from '../data';

export default function Apoiar() {
  return (
    <section id="apoiar" className="apoiar">
      <div className="apoiar__interno">
        <h2>Ajude a manter os projetos de portas abertas</h2>
        <ul className="apoiar__lista">
          {apoios.map((a) => (
            <li key={a.titulo}>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
              <a className="botao botao--vazado botao--pequeno" href={whatsappLink(a.mensagem)} target="_blank" rel="noreferrer">
                {a.acao}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
