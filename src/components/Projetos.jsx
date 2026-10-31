import { cuidados, projetos } from '../data';

const [muay, jiu, judo, ingles] = projetos;
const [psico, social] = cuidados;

const itens = [
  { ...muay, nome: muay.titulo },
  { ...jiu, nome: jiu.titulo },
  { ...judo, nome: judo.titulo },
  { ...ingles, nome: ingles.titulo },
  { nome: 'Atendimento psicológico', titulo: psico.titulo, texto: psico.texto },
  { nome: 'Assistência social', titulo: social.titulo, texto: social.texto },
];

export default function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="projetos__interno">
        <div className="projetos__topo">
          <h2>Seis frentes para cuidar de cada criança</h2>
          <p>Do tatame à sala de aula, com acolhimento para a família inteira. Abra cada projeto para saber mais.</p>
        </div>

        <div className="lista">
          {itens.map((p, i) => (
            <details key={p.nome} name="projeto" className="item" open={i === 0}>
              <summary>
                <span className="item__nome">{p.nome}</span>
                <span className="item__sinal" aria-hidden="true" />
              </summary>
              <div className="item__corpo">
                <div>
                  {!p.imagem && <h3>{p.titulo}</h3>}
                  <p>{p.texto}</p>
                </div>
                {p.imagem && (
                  <img src={p.imagem} alt={p.alt} width="1200" height="900" loading="lazy" style={{ objectPosition: p.posicao }} />
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
