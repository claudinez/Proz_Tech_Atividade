Algoritmo "restaurante"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   :
// Descrição   : Elabore um algoritmo que possa descobrir, através de perguntas e respostas, em qual área de um restaurante uma pessoa ou grupo de pessoas precisa ser alocada.
//      O restaurante tem três áreas: térreo, 1ro andar, e área externa.
//      Clientes fumantes ou com animais de estimação precisam ser alocadas na área externa.
//      Grupos de 5 ou mais precisam ser alocados no 1º andar, pois não dá para juntar mesas no térreo.
//      Qualquer outro grupo de pessoas pode ser alocado no térreo.

// Autor(a)    : Claudinez
// Data atual  : 11/08/2023
Var
// Seção de Declarações das variáveis 
   qtdPessoas: real
   fumante: caracter
   animaisEstimacao: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    Escreva("Quantas pessoas estão no grupo? ")
    Leia(qtdPessoas)
    Escreva("Alguma pessoa do grupo é fumante? (S para Sim, N para Não) ")
    Leia(fumante)
    Escreva("Alguma pessoa do grupo possui animais de estimação? (S para Sim, N para Não) ")
    Leia(animaisEstimacao)
    
    Se (fumante = "S") OU (animaisEstimacao = "S") Entao
        Escreva("Você será alocado na área externa do restaurante.")
    senao
    se (qtdPessoas >=5) entao
        Escreva("Você será alocado no 1º andar do restaurante.")
    senao
        Escreva("Você será alocado no térreo do restaurante.")
    fimse
    fimse
Fimalgoritmo