Algoritmo "Etiqueta"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Descri��o   : Num torneio de e-sports � necess�rio que todos os integrantes
//               da mesma equipe tenham etiquetas que os identifiquem.
//                Por exemplo, se o nome da equipe � �Os Lutadores�,
//                 o primeiro membro deve ter uma etiqueta
//               �Os Lutadores � 1", o segundo membro �Os Lutadores � 2",
//                e assim pela frente.
//               Elabore um algoritmo que permita ao usu�rio inserir o nome
//               da equipe, e imprime etiquetas para os 5 membros da equipe
//               seguindo o exemplo mostrado acima.
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/08/2023
Var
// Se��o de Declara��es das vari�veis 
    nomeEquipe: caracter
    i: Inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
Escreva("Digite o nome da equipe: ")
    Leia(nomeEquipe)

    Para i <- 1 Ate 5 Faca
        Escreval(nomeEquipe, " - ", i)
    FimPara
    
Fimalgoritmo