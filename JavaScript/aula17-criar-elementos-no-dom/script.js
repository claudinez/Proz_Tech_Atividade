const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]
// Criar um novo elemento <article>
const newArticle = document.createElement('article');

// Atribuir o ID "post-2" ao article
newArticle.id = 'post-2';

// Definir a estrutura do <article>
newArticle.innerHTML = `
  <h3>Pop Vegan</h3>
  <p class="subtitulo">Comida vegana para todos!</p>
  <div class="data">06/07/2022</div>
  <p>Restaurante em Consolação com comida por quilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>
`;

// Capturar o elemento <main>
 const = document.querySelector('main');

// Adicionar o <article> como um filho da <main>
main.appendChild(newArticle);
