export const contato = {
  whatsapp: '5511993269095',
  whatsappLabel: '(11) 99326-9095',
  instagram: 'institutoasafesp',
  endereco: 'Rua Lotus Azul, 374',
  bairro: 'Cidade Ipava, São Paulo',
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const instagramLink = `https://instagram.com/${contato.instagram}`;

export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${contato.endereco}, ${contato.bairro}`
)}`;

export const mensagemInscricao = 'Olá! Quero saber como inscrever uma criança nos projetos do Instituto Asafe.';

export const projetos = [
  {
    id: 'muay-thai',
    titulo: 'Muay-Thai',
    texto: 'Disciplina, confiança, saúde e transformação por meio do esporte.',
    imagem: 'img/fotos/muay-thai-2.jpg',
    posicao: '50% 25%',
    alt: 'Três alunos de luvas de boxe posam ao lado do professor de Muay-Thai',
  },
  {
    id: 'jiu-jitsu',
    titulo: 'Jiu-Jitsu',
    texto: 'Esporte que desenvolve disciplina, respeito, autoestima e oportunidades.',
    imagem: 'img/fotos/jiu-jitsu.jpg',
    posicao: '50% 40%',
    alt: 'Turma de Jiu-Jitsu de kimono branco e azul sentada no tatame com os professores',
  },
  {
    id: 'judo',
    titulo: 'Judô',
    texto: 'Aulas gratuitas de judô, com kimono para treinar e a chance de competir em campeonatos.',
    imagem: 'img/fotos/judo.jpg',
    posicao: '50% 30%',
    alt: 'Alunos do Judô Solidário de kimono branco e azul reunidos com o professor',
  },
  {
    id: 'ingles',
    titulo: 'Inglês Solidário',
    texto: 'Educação e novas oportunidades por meio do aprendizado do inglês.',
    imagem: 'img/fotos/ingles.jpg',
    posicao: '50% 30%',
    alt: 'Menina sorri para a câmera em sala de aula do Inglês Solidário, com colegas ao fundo',
  },
];

// Ações fora da rotina de aulas, com as fotos do próprio instituto
export const acoes = [
  {
    id: 'feira',
    titulo: 'Feira Solidária',
    texto: 'Frutas, legumes e ovos distribuídos para as famílias do bairro.',
    imagem: 'img/fotos/feira.jpg',
    posicao: '50% 50%',
    alt: 'Moradores reunidos em frente à sede do Instituto Asafe no dia da Feira Solidária',
    destaque: true,
  },
  {
    id: 'vacinacao',
    titulo: 'Vacinação na sede',
    texto: 'A equipe da UBS Cidade Ipava vacinou moradores dentro do instituto.',
    imagem: 'img/fotos/vacinacao.jpg',
    posicao: '50% 45%',
    alt: 'Equipe de saúde da UBS e voluntários posam na entrada do Instituto Asafe',
  },
  {
    id: 'atendimentos',
    titulo: 'Dia D de atendimentos',
    texto: 'Exame de vista, corte de cabelo e outros serviços no mesmo dia.',
    imagem: 'img/fotos/atendimentos.jpg',
    posicao: '50% 30%',
    alt: 'Profissional faz exame de vista em uma moradora durante o Dia D de atendimentos',
  },
  {
    id: 'mulheres',
    titulo: 'Dia D Mulheres',
    texto: 'Uma tarde de conversa e acolhimento entre mulheres do bairro.',
    imagem: 'img/fotos/mulheres.jpg',
    posicao: '50% 50%',
    alt: 'Grupo de mulheres reunido na sala do instituto ao final da roda de conversa',
  },
  {
    id: 'campeonato',
    titulo: 'Campeonato Iluminando Vidas',
    texto: 'Alunos do Judô Solidário competiram em torneio com medalhas no peito.',
    imagem: 'img/fotos/campeonato.jpg',
    posicao: '50% 50%',
    alt: 'Alunos do Judô Solidário de kimono e medalha diante do cartaz do torneio Iluminando Vidas',
  },
  {
    id: 'manaus',
    titulo: 'Missão Manaus 2024',
    texto: 'Roupas e brinquedos levados de barco às famílias ribeirinhas.',
    imagem: 'img/fotos/manaus.jpg',
    posicao: '50% 50%',
    alt: 'Voluntários entregam roupas e brinquedos a famílias ribeirinhas sob as árvores, em Manaus',
  },
];

export const cuidados = [
  {
    titulo: 'Atendimento psicológico e psicopedagógico',
    texto:
      'Acolhimento e apoio para o desenvolvimento emocional, a aprendizagem e o fortalecimento de crianças, adolescentes e famílias.',
  },
  {
    titulo: 'Assistência social às famílias',
    texto: 'Orientação, acolhimento e apoio para famílias em situação de vulnerabilidade que enfrentam momentos de dificuldade.',
  },
];

// Opções do formulário: `assunto` completa a mensagem enviada no WhatsApp
export const opcoesInscricao = [
  { id: 'muay-thai', rotulo: 'Muay-Thai', assunto: 'as aulas de Muay-Thai' },
  { id: 'jiu-jitsu', rotulo: 'Jiu-Jitsu', assunto: 'as aulas de Jiu-Jitsu' },
  { id: 'judo', rotulo: 'Judô', assunto: 'as aulas de Judô' },
  { id: 'ingles', rotulo: 'Inglês Solidário', assunto: 'o Inglês Solidário' },
  { id: 'psicologico', rotulo: 'Atendimento psicológico', assunto: 'o atendimento psicológico e psicopedagógico' },
  { id: 'social', rotulo: 'Assistência social', assunto: 'a assistência social às famílias' },
];

export const idades = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export const apoios = [
  {
    titulo: 'Doe',
    texto: 'Fale com a equipe para saber o que os projetos mais precisam agora.',
    acao: 'Perguntar como doar',
    mensagem: 'Olá! Quero fazer uma doação para o Instituto Asafe. Do que vocês mais precisam agora?',
  },
  {
    titulo: 'Seja voluntário',
    texto: 'Conte o que você sabe fazer e quanto tempo pode dedicar às crianças e às famílias.',
    acao: 'Oferecer meu tempo',
    mensagem: 'Olá! Quero ser voluntário no Instituto Asafe. Posso ajudar com:',
  },
  {
    titulo: 'Apoie com sua empresa',
    texto: 'Patrocínio, estrutura ou serviços ajudam a manter os projetos funcionando.',
    acao: 'Propor uma parceria',
    mensagem: 'Olá! Minha empresa quer apoiar o Instituto Asafe. Podemos conversar?',
  },
];
