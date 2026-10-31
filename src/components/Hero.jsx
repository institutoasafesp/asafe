import { contato } from '../data';

// A faixa de artes marciais carrega o título: a barra dourada, no lugar da ponteira, mostra a faixa etária.
export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <h1 className="faixa">
        <span className="faixa__corpo">Esporte gratuito para crianças</span>
        <span className="faixa__barra">de 6 a 17 anos</span>
        <span className="faixa__ponta" aria-hidden="true" />
      </h1>

      <div className="hero__miolo">
        <div className="hero__texto">
          <p>
            Muay-Thai, Jiu-Jitsu e Judô, Inglês Solidário e apoio às famílias da {contato.bairro}. Sem custo para
            quem treina.
          </p>
          <div className="hero__acoes">
            <a className="botao" href="#inscricao">Inscrever uma criança</a>
            <a className="botao botao--vazado" href="#apoiar">Apoiar o instituto</a>
          </div>
        </div>
        <img
          className="hero__foto"
          src="img/fotos/muay-thai.jpg"
          alt="Alunas e alunos aprendem golpes de Muay-Thai no tatame azul do instituto"
          width="1200"
          height="900"
        />
      </div>
    </section>
  );
}
