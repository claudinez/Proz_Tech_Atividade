let div = document.querySelector("div")

let incluiClasse = div.classList.contains("texto-novo")

div.classList.add("texto-novo");

div.classList.add("texto-novo");
div.classList.remove("borda-azul");

div.classList.toggle("borda-azul");

console.log(incluiClasse);