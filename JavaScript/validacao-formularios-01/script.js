//----------FUNÇÕES GERAIS

function togglePopup(input, label) {
  //Mostrar popup de campo obrigatorio
  input.addEventListener("focus",() => {
    label.classList.add("required-popup")
  });
  
  //Ocultar popup de campo obrigatorio
  input.addEventListener("blur", () => {
   label.classList.remove("required-popup");
  });
}
    
  function togglePopup(input, label){
  //Mostrar popup de campo obrigatorio
  input.addEnventListener("blur",() => {
  label .classList.remove("required-poup")
  });
}
  function estilizarInputCorreto(input, helper){
   helper.classList.remove("visible");
   input.classList.remove("error");
   input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper){
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
  }
    
// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

//validar valor do input
usernameInput.addEventListener("change", (e)=>{
  let valor = e.target.value

  if(valor.length < 3){
    //adicionar estilos dinâmicos
    usernameHelper.innerText = "Seu usename precisa ter 3 ou mais caracteres";
    estilizarInputcorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
  } else{
    //adiocionar estilos dinamicos se o valor estiver
     estilizarInputCorreto(usernameInput, usernameHelper);
     inputsCorretos.username = true
  }
})

//-----------Validação - Email -------------//
let emailinput = document.getElementById("email")
let emailLabel = documento.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

//-----Validar valor do input
emailInput.addEventlistener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes("com")){
    //adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
    } else {
      //adiocionar estilos dinamicos se o valor tiver menos 3 caracter
      emailHelper.innerText = "Precisa inserir um email valido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputsCorretos.email = false
    }
})

//-----------Validação - Senha -------------//
let senhaInput = document.getElementById("senha")
let senhaLabel = documento.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value
  if(valor == ""){
    senhaHelper.innerText = "Campo senha não pode esta vazio"
    estilizarInputIncorreto(senhaInput, senhaHelper)
  }else{
    estilizarInputCorreto(senhaInput, senhaHelper)

  }
})

//-----------Validação Confirma Senha -------------//
let confirmaSenhaInput = document.getElementById("confirma-senha")
let confirmaSenhaLabel = documento.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorConfirmaSenha = e.target.value

  if(valorConfirmaSenha == senhaInput.value){
    senhaHelper.innerText = "As senhas precisam ser iguais"
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenha = true
  }else{
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenha = false
  }
})

//----------- Evitar o envio do Formulario

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmaSenha: false
}

btnSubmit.addEventListener("click", (e)=>{
  if(inputsCorretos.username == false ||
     inputsCorretos.email == false ||
     inputsCorretos.senha == false ||
     inputsCorretos.confirmaSenha == false){
    e.preventDefault()
    alert('Os campos obrigatorios precisam ser preenchidos')
  }else{
    alert("Formulario enviado com sucesso")
  }
})