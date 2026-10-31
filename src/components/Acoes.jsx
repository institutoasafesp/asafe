import { acoes } from '../data';

export default function Acoes() {
  return (
    <section id="acoes" className="acoes">
      <div className="acoes__interno">
        <div className="acoes__topo">
          <h2>O instituto também sai do tatame</h2>
          <p>Alimentos, saúde, conversa e campeonatos: ações que o Asafe já realizou com a comunidade.</p>
        </div>

        <ul className="acoes__lista">
          {acoes.map((a) => (
            <li key={a.id} className={a.destaque ? 'acao acao--destaque' : 'acao'}>
              <figure>
                <img src={a.imagem} alt={a.alt} width="1200" height="900" loading="lazy" style={{ objectPosition: a.posicao }} />
                <figcaption>
                  <h3>{a.titulo}</h3>
                  <p>{a.texto}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
