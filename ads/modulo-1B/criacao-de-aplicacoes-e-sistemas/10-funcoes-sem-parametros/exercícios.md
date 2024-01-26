# Criação de Aplicações e Sistemas: Funções sem Parâmetros

## Exercícios


## Questão 01 
(NUCEPE - Adaptada) Leia o texto a seguir:

“Em linhas gerais, problemas complexos exigem para sua solução algoritmos complexos. No entanto, é possível dividir um problema grande em problemas menores (dividir para conquistar), ou seja, usar o processo de modularidade.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 176.

Com base no texto acima e nos seus conhecimentos sobre Modularização, analise as afirmativas a seguir e assinale V para a(s) verdadeira(s) e F para a(s) falsa(s).

I. ( ) A modularização de algoritmos é importante porque permite organizar melhor o código, tornando mais fácil chegar à solução.

II. ( ) As variáveis locais são declaradas no escopo do programa inteiro.

III. ( ) As variáveis definidas no escopo de cada função são acessíveis em todo o programa.

IV. ( ) Um módulo é um bloco de programa que pode realizar operações computacionais de entrada, processamento e saída.

Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [ ] a) ​V, F, F, F
- [x] b) ​V, F, F, V
- [ ] c) ​F, V, F, F
- [ ] d) ​V, F, V, F
- [ ] e) ​F, F, V, V

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra B. A afirmativa I é verdadeira, pois a modularização consiste na divisão em partes menores, ou módulos, os quais tem um algoritmo mais simples, possibilitando maior facilidade para chegar à grande solução. A afirmativa II é falsa, pois as variáveis globais são aquelas acessíveis em todos os escopos de um programa, de modo que as variáveis locais existem somente dentro do procedimento. A afirmativa III é falsa, pois as variáveis locais são visíveis, ou seja, podem ser utilizadas somente pelo subalgoritmo onde foram declaradas. Por fim, a afirmativa IV é verdadeira porque cada módulo consiste num bloco de instruções que tem a finalidade de realizar uma tarefa específica, a fim de solucionar uma parte do problema​

Prof. Ricardo Monteiro

## Questão 02 
(FCC - Adaptada) Leia o texto a seguir:
“Ao dividir um problema complexo em módulos, automaticamente se usa a ideia de abstração. Abstrair um algoritmo significa considerar isoladamente um ou mais elementos de seu todo, significa, de forma geral, separar o todo em partes.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 176.

Com base no texto acima e nos seus conhecimentos sobre Modularização, considere as afirmativas a seguir:

I. Uma variável é dita global quando sua definição estiver dentro de um procedimento ou quando for declarado como parâmetro formal do procedimento.

II. Na modularização de um programa, as partes que o compõem podem ser desenvolvidas por diferentes equipes, sem necessidade de estabelecimento prévio de padrões de programação.

III. Na passagem de parâmetros por valor, as variáveis globais que estão trabalhando como parâmetros de entrada do procedimento passam seus valores para os parâmetros locais.

IV. Procedimentos são blocos de programas que executam determinada tarefa.

Está correto o que se afirma em:
### Resposta:
- [ ] a) ​I, II e III
- [ ] b) ​II, III e IV
- [x] c) ​III e IV
- [ ] d) ​I e III
- [ ] e) ​II e IV

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra C. A afirmativa I está incorreta, pois uma variável é classificada como global quando sua visibilidade e escopo alcançam todo o programa. A afirmativa II está incorreta, pois, embora um programa possa sim ter suas partes desenvolvidas por equipes separadas, é imprescindível o estabelecimento prévio de padrões de programação. A afirmativa III está correta porque, na passagem de parâmetros por valor, é feita uma cópia das variáveis globais que estão no procedimento para os parâmetros locais. Por fim, a afirmativa IV está correta, pois os procedimentos são estruturas que agrupam um conjunto de comandos e que tem como objetivo cumprir uma tarefa específica​

Prof. Ricardo Monteiro


## Questão 03 
Leia o texto a seguir:
“O conceito de modularidade tem sido adotado desde meados da década de 1950 […] Ao trabalhar com essa técnica, pode ser necessário dividir um módulo em outros tantos módulos quantos forem necessários, buscando uma solução mais simples de uma parte do problema maior.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 176.

Com base no texto acima e nos conteúdos abordados sobre Modularização, analise as asserções a seguir e a relação proposta entre elas:

I. Procedimentos são blocos de instruções que servem para realizar tarefas específicas e são considerados sub-rotinas.

Porque

II. As sub-rotinas constituem algoritmos extremamente complexos, representando problemas considerados grandes e de difícil solução
### Resposta:
- [ ] a) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I
- [ ] b) ​As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I
- [ ] c) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira
- [ ] d) As asserções I e II são proposições falsas
- [x] e) ​A asserção I é uma proposição verdadeira, e a II é uma proposição falsa

> SOLUÇÃO DO PROFESSOR ✨
>
> Letra E. A asserção I é verdadeira, pois os procedimentos constituem subprogramas que não retornam nenhum valor, mas podem receber valores. A asserção II é falsa, pois as sub-rotinas são utilizadas justamente para fazer a divisão de algoritmos complexos, permitindo, assim, a modularização de um problema considerado grande e de difícil solução em partes menores e mais simples​

Prof. Ricardo Monteiro


## Questão 04 
Leia o texto a seguir:
“A divisão de um módulo em outros módulos denomina-se refinamento. Tanto os módulos de procedimentos como de funções são formas de estender os recursos de abstração da técnica de programação estruturada.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 176.

Com base no texto acima e nos conteúdos abordados sobre Modularização, analise as asserções a seguir e a relação proposta entre elas:

I. Em um procedimento, a passagem de parâmetros é obrigatória.

Porque

II. Procedimentos são blocos de programas que executam determinada tarefa.
### Resposta:
- [ ] a) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I
- [ ] b) ​As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I
- [ ] c) ​As asserções I e II são proposições falsas
- [x] d) ​A asserção I é uma proposição falsa, e a II é uma proposição verdadeira
- [ ] e) ​A asserção I é uma proposição verdadeira, e a II é uma proposição falsa

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra D. A asserção I é falsa, pois, em um procedimento, a passagem de parâmetros é opcional e pode ocorrer de duas formas: passagem por valor ou passagem por referência. A asserção II é verdadeira, pois tanto procedimentos quanto funções são blocos de instruções que objetivam a realização de tarefas específicas e são considerados sub-rotinas​

Prof. Ricardo Monteiro


## Questão 05 
Leia o texto a seguir:
“É importante entender como é feita a passagem de parâmetros em um programa de computador. Cada linguagem realiza esta tarefa segundo suas regras.”

Fonte: RIBEIRO, J. A. Introdução à programação e aos algoritmos. 1. ed. Rio de Janeiro: LTC, 2019, p. 122.

Com base nessas informações e no conteúdo estudado sobre Parâmetros, analise as asserções abaixo.

( ) Dividir e estruturar um algoritmo em partes logicamente coerentes
( ) Facilidade de testar os trechos em separado
( ) Evitar repetição do código-fonte
( ) Maior legibilidade de um algoritmo

Agora, assinale a alternativa que apresenta a sequência correta:
### Resposta:
- [x] a) ​V, V, V, V
- [ ] b) ​F, F, F, F
- [ ] c) ​V, F, V, F
- [ ] d) ​V, V, V, F
- [ ] e) ​F, V, V, V

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra A (V, V, V, V) é alternativa correta. Cada módulo, além de ter acesso às variáveis do programa (variáveis globais), pode ter suas próprias variáveis (variáveis locais), que existem apenas durante a sua chamada. Algumas vantagens na utilização de módulos:
​Dividir e estruturar um algoritmo em partes logicamente coerentes;
​Facilidade de testar os trechos em separado;
​Evitar repetição do código-fonte;
​Maior legibilidade de um algoritmo.​

Prof. Ricardo Monteiro


## Questão 06 
Leia o texto a seguir:

“Uma sub-rotina é, na verdade, um programa, e sendo um programa, pode realizar diversas operações computacionais (entrada, processamento e saída). As sub-rotinas são utilizadas na divisão de algoritmos complexos.”

Fonte: MANZANO, J. A. N. G.; OLIVEIRA, J. F. Estudo Dirigido de Algoritmos. 15. ed. São Paulo: Érica, 2012, p. 176.

Com base no texto e no conteúdo visto da disciplina, verifique se os itens abaixo são verdadeiros (V) ou falsos (F).

( ) Procedimentos são sub-rotinas.

( ) Parâmetros são sub-rotinas.

( ) Procedimentos podem receber valores (parâmetros)

( ) Procedimentos não recebem valores.

Agora, assinale a alternativa que apresenta a sequência correta de V e F:
### Resposta:
- [x] a) ​VFVF
- [ ] b) ​VVVV
- [ ] c) ​FFFV
- [ ] d) ​FVFV
- [ ] e) FVVV

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Letra A (VFVF). Os Procedimentos são sim considerados sub-rotinas pois são módulos que podem ser chamados em qualquer parte do algoritmo. Os Parâmetros não são sub-rotinas, são valores passados para o procedimento fazer algum processamento. Os Procedimentos podem receber valores (parâmetros) e por fim, a última afirmação é falsa, Procedimentos podem receber valores.
Prof. Ricardo Monteiro