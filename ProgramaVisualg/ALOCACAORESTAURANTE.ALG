Algoritmo "AlocacaoRestaurante"

Var
    fumantesOuPet: Logico
    numeroDePessoas: Inteiro

Inicio
    Escreva("Tem algum fumante ou animal de estimação no seu grupo?")
    Leia(fumantesOuPet)

    Se (fumantesOuPet = verdadeiro) Entao
        Escreva("Por favor, dirijam-se à área externa")
    Senao
        Escreva("Quantas pessoas têm no seu grupo?")
        Leia(numeroDePessoas)

        Se (numeroDePessoas >= 5) Entao
            Escreva("Por favor, dirijam-se ao 1º andar")
        Senao
            Escreva("Por favor, permaneçam no térreo")
        FimSe
    FimSe

FimAlgoritmo