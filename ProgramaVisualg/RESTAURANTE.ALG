Algoritmo "restaurante"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   :
// Descri��o   : Elabore um algoritmo que possa descobrir, atrav�s de perguntas e respostas, em qual �rea de um restaurante uma pessoa ou grupo de pessoas precisa ser alocada.
//      O restaurante tem tr�s �reas: t�rreo, 1ro andar, e �rea externa.
//      Clientes fumantes ou com animais de estima��o precisam ser alocadas na �rea externa.
//      Grupos de 5 ou mais precisam ser alocados no 1� andar, pois n�o d� para juntar mesas no t�rreo.
//      Qualquer outro grupo de pessoas pode ser alocado no t�rreo.

// Autor(a)    : Claudinez
// Data atual  : 11/08/2023
Var
// Se��o de Declara��es das vari�veis 
   qtdPessoas: real
   fumante: caracter
   animaisEstimacao: caracter

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    Escreva("Quantas pessoas est�o no grupo? ")
    Leia(qtdPessoas)
    Escreva("Alguma pessoa do grupo � fumante? (S para Sim, N para N�o) ")
    Leia(fumante)
    Escreva("Alguma pessoa do grupo possui animais de estima��o? (S para Sim, N para N�o) ")
    Leia(animaisEstimacao)
    
    Se (fumante = "S") OU (animaisEstimacao = "S") Entao
        Escreva("Voc� ser� alocado na �rea externa do restaurante.")
    senao
    se (qtdPessoas >=5) entao
        Escreva("Voc� ser� alocado no 1� andar do restaurante.")
    senao
        Escreva("Voc� ser� alocado no t�rreo do restaurante.")
    fimse
    fimse
Fimalgoritmo