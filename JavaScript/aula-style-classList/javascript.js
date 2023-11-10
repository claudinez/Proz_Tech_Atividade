const h2 = document.queryselect("#login h2")
console.log(h2);

const button = document.querySelector ("#login form button");
const section = document.querySelector("#login");

let logo = document.getElementById("logo")
console.log(logo)

let postAutores = document.getElementsByClassName("post-autor")
console.log(postAutores)

let texto02 = document.querySelector("#post02 .port-texto")
console.log(texto02)

let listaRedesFooter = document.querySelector("footer .lista_redes li")
console.log(listaRedesFooter)

for (let i = 0; i < listaRedesFooter.length; i++){
    console.log(listaRedesFooter[i]);
}

function percorrerArray(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(postAutores[i]);
}
percorrerArray(lista)

//criar um elemento
let article = document.createElement("article")

//Manipular o elemento
article.innerText = "Elemento criado com JS"
console.log(article)

//Adicionar o elemento
let main = document.querySelector("main")
main.appendChild(article)