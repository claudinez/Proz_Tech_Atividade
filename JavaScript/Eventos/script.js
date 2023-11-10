let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;

function adicionarUm(){

    contagem = contagem + 1;
    numero.innerText = contagem;
  
  }
  botao.addEventListener("click", adicionarUm);

  //exemplos 
  let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;
 

//Exemplo
//botao.addEventListener("click", function(){

  //contagem = contagem + 1;

  //numero.innerText = contagem;

//});
//

/*  Exemplo
Nesses casos, também há o uso de arrow functions para declarar a função anônima,
 substituindo o trecho function( ) por ( ) =>. Dessa forma:


let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;

 

botao.addEventListener("click", () => {

  contagem = contagem + 1;

  numero.innerText = contagem;

});
*/

