let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]")

btnSubmit.addEventListener("click", (e)=> {
    alert("Não foi possível enviar os dados do formulário")
    e.preventDefault()
  })

  linkProz.addEventListener("click", (e)=> {
    e.preventDefault(); 
    alert("Não foi possível acessar o link");
  })