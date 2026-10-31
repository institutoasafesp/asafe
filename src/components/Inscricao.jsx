import { useState } from 'react';
import { idades, opcoesInscricao, whatsappLink } from '../data';
import { IconWhatsApp } from './Icons';

function montarMensagem(opcao, idade) {
  const assunto = opcao ? opcao.assunto : 'os projetos do Instituto Asafe';
  const quem = idade ? ` Tenho uma criança de ${idade} anos.` : '';
  return `Olá! Quero saber mais sobre ${assunto}.${quem}`;
}

export default function Inscricao() {
  const [opcaoId, setOpcaoId] = useState('');
  const [idade, setIdade] = useState('');
  const opcao = opcoesInscricao.find((o) => o.id === opcaoId);
  const mensagem = montarMensagem(opcao, idade);

  return (
    <section id="inscricao" className="inscricao">
      <div className="inscricao__interno">
        <div>
          <h2>A inscrição começa com uma mensagem</h2>
          <ol className="passos">
            <li>Escolha o projeto e a idade da criança neste formulário.</li>
            <li>Envie a mensagem pronta no WhatsApp do instituto.</li>
            <li>A equipe responde com os próximos passos.</li>
          </ol>
        </div>

        <form className="ficha" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Qual projeto interessa?</legend>
            <div className="ficha__opcoes">
              {opcoesInscricao.map((o) => (
                <label key={o.id} className="opcao">
                  <input
                    type="radio"
                    name="projeto"
                    value={o.id}
                    checked={opcaoId === o.id}
                    onChange={() => setOpcaoId(o.id)}
                  />
                  <span>{o.rotulo}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="ficha__idade">
            Idade da criança
            <select value={idade} onChange={(e) => setIdade(e.target.value)}>
              <option value="">Prefiro contar depois</option>
              {idades.map((i) => (
                <option key={i} value={i}>{i} anos</option>
              ))}
            </select>
          </label>

          <p className="ficha__previa" aria-live="polite">{mensagem}</p>

          <a className="botao" href={whatsappLink(mensagem)} target="_blank" rel="noreferrer">
            <IconWhatsApp /> Enviar no WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
