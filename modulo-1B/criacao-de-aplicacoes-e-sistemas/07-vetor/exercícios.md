# Criação de Aplicações e Sistemas: Vetor

## Exercícios


## Questão 01 
(FCC - Adaptado) Leia o texto abaixo:

Um Analista de TI precisou usar uma estrutura de dados simples que utilizasse pouca carga de memória de armazenamento. Tal estrutura é vista como um arranjo cuja capacidade pode variar dinamicamente, isto é, se o espaço reservado for totalmente ocupado e algum espaço adicional for necessário, este será alocado automaticamente não havendo a necessidade de se preocupar com a capacidade de armazenamento ou sua ocupação. Contudo, para que se possa utilizar essa coleção de dados de forma adequada, algumas informações necessárias devem ser mantidas internamente, tais como a quantidade total de elementos e a última posição ocupada na coleção, conforme exemplificado na figura abaixo.

Figura 1 - Elementos e a última posição ocupada na coleção.
Figura 1 - Elementos e a última posição ocupada na coleção.

​Com base no texto, na figura e nos seus conhecimentos acerca da disciplina Criação de Aplicações e Sistema, trata-se da estrutura do tipo:
### Resposta:
- [ ] a) Homogênea multidimensional, portanto um vetor
- [ ] b) Heterogênea multidimensional, portanto uma matriz
- [ ] c) Homogênea unidimensional, portanto uma variável
- [x] d) Homogênea unidimensional, portanto um vetor
- [ ] e) Heterogênea unidimensional, portanto uma constante

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra D. Em computação um Vetor (Array) é o nome dado a uma estrutura unidimensional, considerada a mais simples das estruturas de dados, com tamanho fixo, que armazena do início até o fim variáveis do mesmo tipo, conforme podemos ver na figura do enunciado

Prof. Ricardo Monteiro

## Questão 02 
(Quadrix/ AOCP - Adaptada) Leia o trecho a seguir:
“A matriz de uma dimensão (vetor) é a forma mais simples de tabela de valores com apenas uma coluna e várias linhas de dados, definida em uma única variável com tamanho específico.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 107.

A partir do texto acima e dos conhecimentos sobre Vetor/Array, considere a afirmativas a seguir:

I. O tamanho dos vetores são declarados, geralmente, por meio de colchetes, os quais são usados também para limitar o número de elementos que podem ser armazenados.

II. A atribuição de valores a um vetor já criado é procedida de elemento em elemento, alterando‐se o valor do índice do vetor.

III. Para manipular um elemento em um vetor, de uma estrutura simples (unidimensional) de dados de mesmo tipo, não há a necessidade de se fornecer a posição do elemento desejado.

IV. Um vetor é declarado definindo‐se o seu nome, seu tamanho e seu tipo.

V. Um conjunto homogêneo de dados se dá quando uma determinada estrutura de dados é composta de variáveis com o mesmo tipo.

Está correto o que se afirma em:
### Resposta:
- [x] a) I, II, IV e V
- [ ] b) II, III e IV
- [ ] c) I, II, III e V
- [ ] d) II, III e IV
- [ ] e) I e IV

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra A. A assertiva I está correta porque a declaração de um vetor é feita atribuindo o seu nome e tamanho (dimensão) entre colchetes. A assertiva II está correta, pois o nome do vetor é um só, o que muda é a informação indicada entre colchetes (índice). A assertiva III está incorreta porque um vetor é funciona como um ponteiro para um endereço de memória, onde se inicia uma lista e, para manipular um elemento do vetor, é necessário saber a posição dele, ou seja, em que ponto a partir do endereço indicado está o elemento desejado. A assertiva IV está correta, pois a declaração de um vetor é muito semelhante à declaração de uma variável. A diferença é que depois do nome da variável deve ser informada a quantidade de elementos do vetor. A assertiva V está correta porque o vetor ou array é uma estrutura homogênea unidimensional , que se comporta como uma variável que armazena várias variáveis do mesmo tipo. A sua declaração é feita a partir do seguinte comando: vetor [VALOR INICIAL…VALOR FINAL] de TIPO.​

Prof. Ricardo Monteiro


## Questão 03 
​(FCC - Adaptada) Considere o vetor vet a seguir:​

<img src="./questao-3.png"/>
Agora analise a seguinte sequência de comandos de atribuição que foi feita por um profissional de programação:

aux ← vet[8]

vet[8] ←vet [1]

vet[4] ← vet[6]

vet[6] ← vet[3]

vet[3] ← vet[1] ← aux

A configuração do vetor (do índice 1 ao 8) será:
### Resposta:
- [ ] a) ​ZONAAMAS
- [ ] b) AMASZONA
- [ ] c) ​SMAZONAS
- [ ] d) ​AMASSONA
- [x] e) ​AMAZONAS

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra E. A execução dos comandos descritos no enunciado é detalhada abaixo.
aux ← vet[8]
vet[8=A] ←vet [1=S]
vet[4=A] ← vet[6=Z]
vet[6=Z] ← vet[3=N]
vet[3=N] ← vet[1=A] ← aux

Assim, teremos:
1º A M N A O Z A S
2º A M N Z O A A S
3º A M A Z O N A S.

Prof. Ricardo Monteiro


## Questão 04 
(IDECAN - Adaptada) Leia o trecho a seguir:

Arrays são consideradas estruturas de dados que consistem em itens de dados do mesmo tipo. São entidades “estáticas” porque uma vez que são criadas, permanecem do mesmo tamanho. É um grupo de posições de memória adjacentes, que possuem o mesmo nome e tipo.

Com base no texto acima e nos seus conhecimentos sobre Vetor/Array, analise as afirmativas a seguir e assinale V para a(s) verdadeira(s) e F para a(s) falsa(s).

I. ( ) O vetor/array é declarado em uma seção de variáveis.
II. ( ) A palavra vetor (no Visualg) não é uma palavra reservada.
III. ( ) Um vetor com valor inicial e valor final de um tipo (separados por dois pontos), pode ser do tipo inteiro, real, ou caracter.
IV. ( ) O número da posição em colchetes é mais formalmente chamado de índice. Esse número deve ser um inteiro.

Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [ ] a) F, V, F, F
- [ ] b) ​V, V, V, V
- [ ] c) ​F, F, V, F
- [x] d) ​V, F, V, V
- [ ] e) ​F, V, F, F

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra D. A afirmativa I é verdadeira, pois o vetor/array é declarado em uma seção de variáveis.
A afirmativa II é falsa porque a palavra vetor (no Visualg) é uma palavra reservada.
A afirmativa III é verdadeira, pois um vetor com valor inicial e valor final de um tipo (separados por dois pontos), pode ser do tipo inteiro, real ou caracter.
A afirmativa IV é verdadeira, visto que o número da posição em colchetes é mais formalmente chamado de índice. Esse número deve ser um inteiro.

Prof. Ricardo Monteiro


## Questão 05 
(CESPE/ CEBRASPE - Adaptada) Leia o trecho a seguir:
“[…] o vetor ocupa uma área de memória contígua, portanto, o segundo elemento está na memória logo após o primeiro elemento; o terceiro, após o segundo; e assim até que o último elemento esteja após o penúltimo. Um vetor de n elementos inteiros ocupa a memória equivalente a pelo menos n inteiros.”

Fonte: RIBEIRO, J. A. Introdução à programação e aos algoritmos. 1. ed. Rio de Janeiro: LTC, 2019, p. 136.

A partir do texto acima e dos conhecimentos sobre Vetor/Array, considere a afirmativas a seguir:

I. Vetores são utilizados quando estruturas indexadas necessitam de mais que um índice para identificar um de seus elementos.

II. Vetores podem ser considerados como listas de informações armazenadas em posição contígua na memória.

III. Uma posição específica de um vetor pode ser acessada diretamente por meio de seu índice.

Está correto o que se afirma em:
### Resposta:
- [ ] a) ​I e II
- [ ] b) ​I e III
- [x] c) ​II e III
- [ ] d) ​I, II e III
- [ ] e) ​apenas II

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra C. A assertiva I está incorreta porque os vetores são unidimensionais, portanto, apresentam um índice. Se existisse mais de um índice ao invés de um vetor teríamos uma matriz. A assertiva II está correta, pois um vetor pode armazenar uma coleção de valores do mesmo tipo, de tal modo que os elementos da coleção são armazenados em posições contíguas de memória. A assertiva III está correta porque a forma de acesso aos elementos de um array é direta, isto quer dizer que o elemento desejado é obtido a partir do seu índice e não é preciso buscar elemento por elemento​

Prof. Ricardo Monteiro


## Questão 06 
(IBFC - Adaptada) Leia o trecho a seguir:

Como resposta a uma questão da prova, a definição de estrutura de dados elementar denominada vetor foi apresentada por 5 alunos de formas diferentes, como mostrado a seguir:

Tatiana definiu que: o vetor é a representação gráfica de uma reta orientada possuindo mesma intensidade, direção e sentido.

Rivaldo escreveu que: o vetor é o conjunto de todos os segmentos orientados equipolentes a um segmento dado.

Daniele definiu que: o vetor permite o acesso a uma grande quantidade de dados em memória usando-se apenas um nome de variável.

Fernando escreveu que: os vetores são utilizados em computação gráfica representando os minúsculos pontos diferenciados pela sua cor.

Ana definiu que: o vetor é uma representação mais simples de uma matriz, de modo que toda matriz é um vetor, mas nem todo vetor é uma matriz.

A professora Débora corrigiu todas as respostas dadas pelos alunos e chegou a conclusão de que apenas uma delas estava correta, a resposta de:
### Resposta:
- [ ] a) ​Ana
- [x] b) Daniele
- [ ] c) Tatiana
- [ ] d) ​Rivaldo
- [ ] e) ​Fernando

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra B. O vetor é uma forma eficiente de agrupar dados, visto que temos um acesso em tempo constante a qualquer elemento, consistindo numa variável que armazena várias variáveis do mesmo tipo​

Prof. Ricardo Monteiro