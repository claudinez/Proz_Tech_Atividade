Algoritmo "Etiqueta"
// Disciplina   : [Linguagem e Lógica de Programação]
// Descrição   : Num torneio de e-sports é necessário que todos os integrantes
//               da mesma equipe tenham etiquetas que os identifiquem.
//                Por exemplo, se o nome da equipe é “Os Lutadores”,
//                 o primeiro membro deve ter uma etiqueta
//               “Os Lutadores – 1", o segundo membro “Os Lutadores – 2",
//                e assim pela frente.
//               Elabore um algoritmo que permita ao usuário inserir o nome
//               da equipe, e imprime etiquetas para os 5 membros da equipe
//               seguindo o exemplo mostrado acima.
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/08/2023
Var
// Seção de Declarações das variáveis 
    nomeEquipe: caracter
    i: Inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreva("Digite o nome da equipe: ")
    Leia(nomeEquipe)

    Para i <- 1 Ate 5 Faca
        Escreval(nomeEquipe, " - ", i)
    FimPara
    
Fimalgoritmo