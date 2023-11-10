let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");

inputEmail.addEventListener("focus", ()=> {
    inputEmail.style.backgroundColor = "lightgreen"
  });

  inputEmail.addEventListener("blur", (e)=> {
    e.target.style.backgroundColor = ""
  });

  inputIdade.addEventListener("change", ()=> {
    alert("Certeza que quer alterar seus dados?")
  });

  formulario.addEventListener("submit", ()=> {
    alert("Dados enviados com sucesso!")
  });