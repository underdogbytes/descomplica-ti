# Criação de Aplicações e Sistemas: Procedimentos sem Parâmetros

## Exercícios


## Questão 01 
Leia o algoritmo abaixo:

Algoritmo “PRIMEIRA PERGUNTA”
Procedimento OPERACAOALPHA

var
aux: inteiro
inicio
aux <- a – b
res <- aux
fimprocedimento

var
res, a, b: inteiro

inicio
a <- 20
b <- 6

OPERACAOALPHA

escreval(res)

fimalgoritimo

Com base no algoritmo mostrado acima e nos conteúdos abordados sobre Procedimentos, analise as opções abaixo, e assinale a que expressa corretamente o resultado que seria impresso ao executar o procedimento OPERACAOALPHA.
### Resposta:
- [x] a) 14
- [ ] b) 20
- [ ] c) 6
- [ ] d) "res"
- [ ] e) "aux"

> SOLUÇÃO DO PROFESSOR ✨
>
> O algoritmo “PRIMEIRA PERGUNTA” possui um procedimento que tem como parâmetros dois números inteiros a e b e calcula a diferença entre eles através do comando (aux <- a – b). Logo, basta usar os valores dados a e b (20 e 6) respectivamente e subtrair o segundo do primeiro. Desta forma, quando o algoritmo for executado, o valor 14 será exibido na tela​

Prof. Ricardo Monteiro

## Questão 02 
Com base em Procedimentos verifique se as afirmativas são verdadeiras (V) ou falsas (F)

( ) Procedimentos não são módulos, somente Funções.

( ) Procedimento seu único objetivo é mostrar dados na tela.

( ) Procedimento é um comando.

( ) Procedimentos são considerados módulos ou sub-rotinas.

Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [ ] a) VVVV
- [ ] b) ​FFFF
- [x] c) ​FFFV
- [ ] d) ​VVVF
- [ ] e) ​VVVF


> SOLUÇÃO DO PROFESSOR ✨
>
> Letra C. A primeira afirmativa é falsa, pois Funções e Procedimentos são módulos. A segunda afirmativa também é falsa pois Procedimento tem como objetivo principal particionar o código para facilitar a programação. A terceira afirmativa também é falsa pois Procedimento é um módulo do algoritmo ou programa e não um comando que não retorna valor. Por fim, a última afirmação é verdadeira pois Procedimentos são módulos ou sub-rotinas de um programa ou algoritmo.
Prof. Ricardo Monteiro


## Questão 03 
Leia o texto a seguir:

Uma progressão aritmética (PA) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com uma constante r. Podemos representar uma PA na forma PA (a1, a2, a3, … , an). Sabendo que podemos descobrir o valor do termo em qualquer posição pela fórmula:

an = a1 + (n - 1)*r

Com base no texto acima e nos conteúdos abordados sobre Procedimentos, analise as expressões de pseudocódigo abaixo e assinale aquela que corresponde à um procedimento dedicado a encontrar o valor do enésimo termo de uma PA de termos inteiros, razão r e primeiro termo igual a a1
### Resposta:
- [ ] a) ​procedimento TERMOPA
​Var
​Aux: inteiro
​Inicio
​Aux <- a1 + (n+1) * r
​Res <- Aux
​fimprocedimento
- [ ] b) ​procedimento TERMOPA
​Var
​Aux: inteiro
​Inicio
​Aux <- a1 + (r+1) * n
​Res <- Aux
​fimprocedimento
- [ ] c) ​procedimento TERMOPA
​Var
​Aux: inteiro
​Inicio
​Aux <- an + (r+1) * n
​Res <- Aux
​fimprocedimento
- [ ] d) ​procedimento TERMOPA
​Var
​Aux: inteiro
​Inicio
​Aux <- n + (a1-1) * r
​Res <- Aux
​fimprocedimento
- [x] e) ​procedimento TERMOPA
​Var
​Aux: inteiro
​Inicio
​Aux <- a1 + (n-1) * r
​Res <- Aux
​fimprocedimento

> SOLUÇÃO DO PROFESSOR ✨
>
> Para criar um procedimento capaz de calcular o valor de um elemento de uma PA baseada na sua posição e razão, basta seguir a fórmula fornecida no enunciado: an = a1 + (n - 1)* r. Desta forma, a única alternativa que segue o indicado é:

procedimento TERMOPA
Var
Aux: inteiro
Inicio
Aux <- a1 + (n-1) * r
Res <- Aux
fimprocedimento

Prof. Ricardo Monteiro


## Questão 04 
Leia o algoritmo abaixo:

Algoritmo “QUARTA PERGUNTA”
Procedimento TERMODAPA

var
aux: inteiro
inicio
aux <- a1 + (n - 1) * r
res <- aux
fimprocedimento

var
res, a1, n, r: inteiro

inicio
a1 <- 20
n <- 8
r <- 4

TERMODAPA

escreval(res)

fimalgoritimo

Com base no algoritmo acima e nos conteúdos abordados sobre Procedimentos, analise as opções abaixo, e assinale a que expressa corretamente o resultado que seria impresso ao executar o procedimento TERMODAPA.
### Resposta:
- [x] a) 48
- [ ] b) 27
- [ ] c) 52
- [ ] d) 28
- [ ] e) 24

> SOLUÇÃO DO PROFESSOR ✨
>
> O algoritmo “QUARTA PERGUNTA” possui um procedimento que tem como parâmetros três números inteiros a1, n e r e calcula o valor do enésimo termo usando a fórmula da PA. Logo, basta usar a fórmula:

a1 + (n - 1) * r

20 + (8 - 1) * 4

Assim, o valor 48 será exibido na tela

Prof. Ricardo Monteiro


## Questão 05 
Leia o texto a seguir:

Um estagiário é encarregado de descobrir a idade dos funcionários de um escritório para determinar a posição de cada um na fila da vacina. A empresa guarda em seus arquivos a data de nascimento de cada um dos seus funcionários. Para facilitar seu trabalho ele decide criar o seguinte algoritmo.

Algoritmo “CALCULAR IDADE”
Procedimento IDADE

var
aux: inteiro
inicio
aux <- anoatual – anonascimento
res <- aux
fimprocedimento

var
res, anoatual, anonascimento: inteiro

inicio
anoatual <- 2021
anonascimento <- 1970

IDADE

escreval(res)

fimalgoritimo

Com base no algoritmo acima e nos conteúdos abordados sobre Procedimentos, analise as opções abaixo, e assinale a que expressa corretamente o resultado que seria impresso ao executar o procedimento IDADE para o funcionário em questão.
### Resposta:
- [ ] a) 2
- [ ] b) 35
- [ ] c) 18
- [x] d) 51
- [ ] e) 41

> SOLUÇÃO DO PROFESSOR ✨
>
> ​O algoritmo “CALCULAR IDADE” possui um procedimento que tem como parâmetros dois números inteiros anoatual e anonascimento e calcula a diferença entre eles através do comando (aux <- anotual – anonascimento). Logo, basta usar os valores dados anoatual e anonascimento (2021 e 1970) respectivamente e subtrair o segundo do primeiro. Desta forma, quando o algoritmo for executado, o valor 5 será exibido na tela​

Prof. Ricardo Monteiro


## Questão 06 
Leia o texto a seguir:

A velocidade média de um objeto pode ser calculada a partir da sua variação de distância percorrida e o tempo que levou para percorrer esta distância. A fórmula da velocidade média é:

Vm = variação de distância / variação de tempo

Um radar na estrada funciona calculando o tempo que um veículo levou para percorrer uma distância conhecida pelo programa. Supondo que o radar possui o seguinte pseudocódigo:

Algoritmo “CALCULAR VELOCIDADE MÉDIA”
Procedimento VELOCIDADE

var
aux, tempo: inteiro
inicio
tempo = tempofinal - tempoinicial
aux <- d / tempo
res <- aux
fimprocedimento

var
res, tempofinal, tempoinicial, d: inteiro

inicio
tempofinal <- 10
tempoinicial <- 8
d <- 60

VELOCIDADE

escreval(res)

fimalgoritimo

Com base no algoritmo acima e nos conteúdos abordados sobre Procedimentos, analise as opções abaixo, e assinale a que expressa corretamente o resultado que seria impresso ao executar o procedimento VELOCIDADE para os dados coletados pelo radar.
### Resposta:
- [ ] a) 6
- [ ] b) 60
- [x] c) 30
- [ ] d) 20
- [ ] e) 12

> SOLUÇÃO DO PROFESSOR ✨
>
> ​O algoritmo “CALCULAR VELOCIDADE MÉDIA” possui um procedimento que tem como parâmetros três números inteiros d, tempoinicial e tempofinal e calcula a velocidade média a partir do comando (aux <- d / tempo). Logo, basta usar os valores dados tempoinicial e tempofinal (10 e 8), respectivamente, e subtrair o segundo do primeiro para encontrar a variação de tempo. Em seguida, é só dividir o valor da distância (d = 60) pelo tempo (tempo = 10 – 8 = 2). Desta forma, quando o algoritmo for executado, o valor 30 será exibido na tela​

Prof. Ricardo Monteiro