Algoritmo "AlocacaoRestaurante"

Var
    fumantesOuPet: Logico
    numeroDePessoas: Inteiro

Inicio
    Escreva("Tem algum fumante ou animal de estima��o no seu grupo?")
    Leia(fumantesOuPet)

    Se (fumantesOuPet = verdadeiro) Entao
        Escreva("Por favor, dirijam-se � �rea externa")
    Senao
        Escreva("Quantas pessoas t�m no seu grupo?")
        Leia(numeroDePessoas)

        Se (numeroDePessoas >= 5) Entao
            Escreva("Por favor, dirijam-se ao 1� andar")
        Senao
            Escreva("Por favor, permane�am no t�rreo")
        FimSe
    FimSe

FimAlgoritmo