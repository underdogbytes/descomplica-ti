# Design de Software: Diagrama de Classe

## Exercícios

## Questão 01 
​Observe o seguinte diagrama de classes​
<img src="./01.png" />
​Considerando que na relação entre o Fabricante e Produto podemos dizer que o Produto é parte do Fabricante, mas que a exclusão de Produto não acarretará na exclusão de Fabricante, marque a alternativa que indica este tipo de representação.
### Resposta:
- [ ] a) ​Colaboração
- [x] b) ​Generalização
- [ ] c) ​Composição
- [ ] d) ​Agregação
- [ ] e) ​Classe de associação

> SOLUÇÃO DO PROFESSOR ✨
​Agregação é um tipo especial de associação que modela um relacionamento de parte inteira entre agregado e suas partes. Produto é parte de Fabricante.

Colaboração - não é uma representação do diagrama de classe. representa um diagrama da UML.

Generalização - representa a classificação de vários tipos de objetos associado a características comuns.

Composição - representa que a ligação entre os objetos das classes relacionadas causa dependência, onde na exclusão de um causará a exclusão do outro.

Classe de associação - ligação entre objetos de classes distintas e possui a relação por necessidade de representação de uma regra de negócio.

Prof. Juliana Mayra

## Questão 02 
​Observe o diagrama de classes abaixo:
<img src="./02.png" />
Marque a alternativa que define a representação entre PRODUTO e CELULAR.

### Resposta:
- [ ] a) ​Colaboração
- [x] b) Generalização
- [ ] c) Composição
- [ ] d) ​Agregação
- [ ] e) ​Classe de associação

> SOLUÇÃO DO PROFESSOR ✨
​Generalização indica que uma classe depende de outra. No caso celular herda informações de Produto.

Colaboração - não é uma representação do diagrama de classe. representa um diagrama da UML.

Composição - representa que a ligação entre os objetos das classes relacionadas causa dependência, onde na exclusão de um causará a exclusão do outro.


Agregação é um tipo especial de associação que modela um relacionamento de parte inteira entre agregado e suas partes.

Classe de associação - classe resultado da ligação entre objetos de classes distintas e possui a relação por necessidade de representação de uma regra de negócio.​​

Prof. Juliana Mayra




## Questão 03 
A imagem abaixo representa:
<img src="./03.png"/>

### Resposta:
- [ ] a) ​Generalização entre um objeto “Venda” e um objeto “Item de Venda”
- [x] b) ​Composição entre um objeto “Venda” e um objeto “Item de Venda”
- [ ] c) ​Agregação entre um objeto “Venda” e um objeto “Item de Venda”
- [ ] d) ​Dependência entre um objeto “Venda” e um objeto “Item de Venda”
- [ ] e) ​Relação entre um objeto “Venda” e um objeto “Item de Venda”

> SOLUÇÃO DO PROFESSOR ✨
​A composição é um tipo especial de agregação que denota forte propriedade entre duas classes quando uma classe faz parte de outra classe.
​Generalização - representa a classificação de vários tipos de objetos associado a características comuns.
​Colaboração - não é uma representação do diagrama de classe. representa um diagrama da UML.
​Agregação é um tipo especial de associação que modela um relacionamento de parte inteira entre agregado e suas partes.
​Relação é a associação (ligação) entre objetos de classes distintas e possui a relação por necessidade de representação de uma regra de negócio.
​Dependência significa a relação entre duas ou mais classes em que uma mudança em uma, pode forçar mudanças na outra.​

Prof. Juliana Mayra


## Questão 04 
A figura abaixo ilustra um tipo de associação entre uma classe Livro e uma classe Livro_tecnico, escolhida para representar o tipo de ligação entre as classes, em um determinado sistema.​
<img src="./04.png"/>
​Analisando as definições e, de acordo com a UML 2, marque a alternativa CORRETA que justifica a escolha.

### Resposta:
- [ ] a) ​Incorreta, pois deveria ter sido representada uma agregação
- [x] b) ​Incorreta, pois deveria ter sido representada uma generalização
- [ ] c) ​Correta, pois há uma composição entre as classes
- [ ] d) ​Correta, pois existe uma propagação entre as classes
- [ ] e) ​Correta, pois foi empregado o recurso da materialização

> SOLUÇÃO DO PROFESSOR ✨
​Geralmente existem semelhanças entre diferentes classes. Livro e Livro_tecnico são semelhantes.
​Agregação é um tipo especial de associação que modela um relacionamento de parte inteira entre agregado e suas partes e os objetos das classes relacionadas não são semelhantes.
​composição é um tipo especial de agregação que denota forte propriedade entre duas classes quando uma classe faz parte de outra classe e não são semelhantes.
​propagação e materialização não são termos aplicados no diagrama de classe.​

Prof. Juliana Mayra


## Questão 05 
​A figura abaixo mostra um diagrama de classes UML desenvolvido para um projeto em que ainda não se sabe em que linguagem será realizada a implementação
<img src="./05.png"/>
Analisando as relações e multiplicidades apresentadas marque a alternativa correta.

### Resposta:
- [x] a) ​Há um erro na cardinalidade da associação entre ClasseA e ClasseB, pois se trata de uma composição e, como tal, um objeto da ClasseB só pode estar associado a um objeto da ClasseA
- [ ] b) Há uma dependência cíclica entre ClasseB, ClasseC e ClasseE, o que não é permitido pela UML
- [ ] c) ​O fato de que ClasseD generaliza ClasseA e ClasseB se traduz em herança múltipla, o que não é permitido pela UML
- [ ] d) ​O fato de Classe E ser uma agregação de Classe C implica em Classe C ser uma especialização de Classe B
- [ ] e) ​O fato de Classe B ser uma composição de Classe A implica em Classe E ser uma especialização de Classe A

> SOLUÇÃO DO PROFESSOR ✨
Há um erro na cardinalidade da associação entre ClasseA e ClasseB, pois se trata de uma composição e, como tal, um objeto da ClasseB só pode estar associado a um objeto da ClasseA.
Na representação não há dependência cíclica nem herança múltipla representados no modelo. Agregação e composição não geram desdobramento de especialização.
Prof. Juliana Mayra

## Questão 06 
O diagrama de classe proposto na UML (Unified Modeling Language) apresenta o conjunto de objetos através das Classes e, para estabelecer a relação entre os objetos das classes são propostos vários tipos de associação, cada um com um significado próprio.

Marque a alternativa que define o tipo de associação correto em relação a seu significado.
### Resposta:
- [ ] a) ​A navegação em uma associação é unidirecional, da esquerda para direita e de cima para baixo, a menos que seja explicitado o procedimento contrário
- [ ] b) ​Em generalizações, atributos e operações são herdados pelas subclasses. Entretanto, os relacionamentos de associação não são herdados
- [x] c) ​Em uma associação entre duas classes, a própria associação pode ter atributos. Nesse caso, usa-se a classe de associação
- [ ] d) ​A agregação é um relacionamento particular de especialização, que especifica o relacionamento todo/parte entre o agregado e o componente
- [ ] e) ​A agregação é uma forma especial de composição com tempo de vida coincidente das partes pelo todo, ou seja, o objeto composto é responsável pela criação e destruição de suas partes

> SOLUÇÃO DO PROFESSOR ✨
>
> Em uma associação entre duas classes, a própria associação pode ter atributos. Nesse caso, usa-se a classe de associação.
​A navegação em uma associação é bidirecional.
​Em generalizações, atributos e operações são herdados pelas subclasses. Os relacionamentos de associação SÃO herdados.
​A agregação NÃO é um relacionamento particular de especialização, APESAR DE especificar o relacionamento todo/parte entre o agregado e o componente.
​A agregação NÂO é uma forma especial de composição.​

Prof. Juliana Mayra