# Criação de Aplicações e Sistemas: Funções com Parâmetros

## Exercícios


## Questão 01 
Leia o texto abaixo:

O volume de uma esfera é calculada por 
�
=
4
3
�
�
3
V= 
3
4
​
 πr 
3
 

. O código abaixo foi criado para implementar um programa que informa o valor do volume, em cm³, após o usuário digitar o valor do raio, em cm.

Algoritmo “volume”

Var
// Seção de Declarações das variáveis
r, V: real

funcao volume: real
var
b: real;
inicio

b <- r^3*(4/3)*pi
retorne b
fimfuncao

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc…

Escreval(“Insira o valor do raio em cm”)
leia®
V <- r^3*(4/3)*pi
Escreval("O Volume de uma esfera de raio ", r, " cm é “, V, " cm³”)
Fimalgoritmo

Com base no algoritmo acima e nos conteúdos abordados sobre Funções, assinale a alternativa que expressa corretamente o resultado que será impresso ao executar o procedimento, caso o usuário insira o valor 3 para o raio “r”
### Resposta:
- [x] a) 113,097 cm³
- [ ] b) 115,172 cm³
- [ ] c) 102, 886 cm³
- [ ] d) 37,680 cm³
- [ ] e) 40,129 cm³

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra A. Quando o algoritmo “volume” for executado, o resultado exibido na tela ao inserir o valor 3 para o raio “r” é 113, 097, conforme mostrado a seguir:
<img src="./questao-01-explicacao-prof-1.png"/>

## Questão 02 
Com base em Funções verifique se as afirmativas são verdadeiras (V) ou falsas (F)

( ) Funções não são módulos, somente Procedimentos.

( ) Função seu único objetivo é mostrar dados na tela.

( ) Função é um comando.

( ) Funções são considerados módulos ou sub-rotinas.

Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [ ] a) ​VVVV
- [ ] b) ​FFFF
- [x] c) ​FFFV
- [ ] d) ​VVVF
- [ ] e) ​VFVF

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra C. A primeira afirmativa é falsa, pois Funções e Procedimentos são módulos. A segunda afirmativa também é falsa pois Função tem como objetivo principal particionar o código para facilitar a programação. A terceira afirmativa também é falsa pois Função é um módulo do algoritmo ou programa e não um comando. Por fim, a última afirmação é verdadeira pois Funções são módulos ou sub-rotinas de um programa ou algoritmo.
Prof. Ricardo Monteiro


## Questão 03 
(FCC - Adaptada) Leia o trecho a seguir:

“Normalmente as funções retornam algum resultado para quem as chamou. Assim, a informação corre nos dois sentidos, entre quem chamou e a função chamada […] mas podemos obter mais de uma resposta se essa resposta vier encapsulada.”

Fonte: RIBEIRO, J. A. Introdução à programação e aos algoritmos. 1. ed. Rio de Janeiro: LTC, 2019, 111-113.

Com base no texto e nos seus conhecimentos sobre Funções, analise as afirmativas a seguir e assinale V para a(s) verdadeira(s) e F para a(s) falsa(s).



I. ( ) A sintaxe apresentada abaixo é utilizada para funções:

funcao <nome da função> :

var

inicio

<sequência de comandos>

retorne < valor >

fimfuncao



II. ( ) A função é um tipo de sub-rotina que retorna algum valor.



III. ( ) A função f1, escrita em pseudocódigo abaixo, recebe uma variável real e retorna um valor inteiro.

funcao f1 (N:inteiro) : real

var

inicio

se (N<=1)

então retorna 1

senão retorna (N* f1 (N-1))

fimse

fim



IV. ( ) A função f1, cujo pseudocódigo foi descrito acima, é executada apenas uma vez, já que em seu corpo existe apenas um comando condicional.



Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [ ] a) ​V, F, V, F
- [x] b) ​V, V, F, F
- [ ] c) ​F, V, F, V
- [ ] d) ​F, F, V, F
- [ ] e) ​F, V, V, V

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra B. A afirmação I é verdadeira, pois para implementar uma função é preciso fazer a declaração da função e dos tipos de dados, implementar a série de comandos necessários e solicitar que seja retornado o valor gerado como resultado da execução do programa a partir das entradas fornecidas pelo usuário. A afirmação II é verdadeira, pois a função é um subprograma que retorna valores. A afirmação III é falsa porque a função f1 recebe um valor inteiro e retorna um valor real. A afirmação IV é falsa, pois, dependendo do valor de ‘n’, a função f1 poderá ser executada diversas vezes​

Prof. Ricardo Monteiro


## Questão 04 
Leia o pseudocódigo abaixo:

funcao f2 (N:inteiro) : real
var i: inteiro
result: real
inicio
result <- 1
para (1<- 2 até N passo 1) faça
result <- result*i
fimpara
retorna result
fim

Com base no algoritmo mostrado acima e nos seus conhecimentos sobre Funções, é correto afirmar que a função apresenta, respectivamente:
### Resposta:
- [ ] a) ​Uma variável de entrada e duas de saída
- [ ] b) ​Duas variáveis de entrada e uma de saída
- [ ] c) ​Duas variáveis de entrada e duas de saída
- [x] d) ​Uma variável de entrada e uma de saída
- [ ] e) ​Nenhuma variável de entrada e uma de saída

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra D. A função apresenta uma variável de entrada, que é “N”, e uma variável de saída, que é “result”​

Prof. Ricardo Monteiro


## Questão 05 
Leia o trecho a seguir:
“[…] programar é muito mais que apenas escrever automaticamente alguns comandos em um editor de texto, é muito mais que saber a sintaxe de uma linguagem. Programar é uma atividade intelectual. Para isso, você precisa pensar, estudar, buscar soluções de problemas. Diversas áreas do conhecimento podem ajudá-lo a buscar melhores soluções. Não despreze nada.”

Fonte: RIBEIRO, J. A. Introdução à programação e aos algoritmos. 1. ed. Rio de Janeiro: LTC, 2019, 113.

Com base no texto acima e nos conteúdos abordados sobre Funções, analise as asserções a seguir e a relação proposta entre elas:

I. Uma função é um bloco de programa contendo início e fim, sendo identificada por um nome de referência pelo qual se fará uso da função pelo programa principal ou pelo trecho que faz a chamada dessa função.

Porque

II. A diferença entre função e procedimento está no fato de que a função sempre retorna um valor como resposta de sua operação e o procedimento não.
### Resposta:
- [ ] a) ​A asserção I é uma proposição verdadeira, e a II é uma proposição falsa
- [ ] b) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I
- [ ] c) ​A asserção I é uma proposição falsa, e a II é uma proposição verdadeira
- [ ] d) ​As asserções I e II são proposições falsas
- [x] e) ​As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra E. A asserção I é verdadeira, pois uma função é um bloco de programa, como também é um tipo especial de procedimento em que, depois de executada a chamada, o valor calculado é retornado no nome da função. A asserção II é verdadeira, mas não é uma justificativa correta da I, pois esclarece que, embora tenham sintaxes de definição idênticas e uma função seja parecida com um procedimento, o procedimento não retorna valor, enquanto a função o faz, seja este último um valor numérico, lógico ou literal​

Prof. Ricardo Monteiro


## Questão 06 
​Qual é a diferença entre Procedimentos e Funções?

### Resposta:
- [ ] a) ​Funções não são módulos, somente Procedimentos
- [ ] b) Função seu único objetivo é mostrar dados na tela e Procedimento ler dados de entrada
- [ ] c) Funções e Procedimentos são iguais.
- [ ] d) Função só pode ser usada em linguagem Java
- [x] e) Funções retornam valor e Procedimento não retornam valor

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra E. A diferença é: Funções retornam valor e Procedimento não retornam valor.


Prof. Ricardo Monteiro