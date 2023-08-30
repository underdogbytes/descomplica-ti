# Design de Software: Outros conceitos de orientação a objetos

## Exercícios


## Questão 01 
​A programação orientada a objetos é baseada em diversos conceitos, tais como encapsulamento, herança, polimorfismo e abstração. Com relação a esses conceitos, é correto afirmar que:
### Resposta:
- [ ] a) O conceito de encapsulamento é alcançado por meio da definição da visibilidade pública aos atributos e métodos
- [ ] b) Herança é um mecanismo que permite que uma classe herde todo o comportamento e os atributos de outra classe. Em Java, pode-se implementar somente a herança múltipla
- [ ] c) A interface pode ser considerada como a forma com que um objeto se apresenta para outros, no que diz respeito aos seus atributos e métodos. Em Java, uma mesma classe não pode implementar mais de uma interface para identificar diferentes implementações dos métodos
- [x] d) O polimorfismo é o uso de um mesmo nome para identificar diferentes implementações dos métodos. Seu uso é comum na definição de construtores, em que os mesmos podem ser implementados em diferentes versões para as diferentes formas de se instanciar a classe.
- [ ] e) Para uma classe ser considerada abstrata, todos os seus métodos devem ser abstratos. Em Java, para se definir uma classe abstrata deve-se utilizar a palavra chave “abstract” no início de sua declaração

> SOLUÇÃO DO PROFESSOR ✨
>
> ​O polimorfismo é o uso de um mesmo nome para identificar diferentes implementações dos métodos. Seu uso é comum na definição de construtores, em que os mesmos podem ser implementados em diferentes versões para as diferentes formas de se instanciar a classe. O encapsulamento é a proteção dos dados. Pode-se ter herança múltipla. Uma interface por implementar mais de uma. Em uma classe abstract os métodos podem não ser abstracts. podem ser funcionais.
>
> Prof. Juliana Mayra

## Questão 02 
​Considerando que podemos calcular o salário de várias formas em função do objeto que esteja sendo utilizado, quando o cálculo é diferente para gerente e técnico, marque a alternativa que a função calcular implementa um exemplo do conceito de:
### Resposta:
- [ ] a) ​composição
- [ ] b) ​herança
- [x] c) ​polimorfismo
- [ ] d) ​recursividade
- [ ] e) ​agregação

> SOLUÇÃO DO PROFESSOR ✨
>
> Podemos ter várias formas de implementar o cálculo. Por isso estamos tratando de polimorfismo. O uso da composição diz respeito a ter um. A herança é o processo de herdar os atributos e métodos, a recursividade é processo de algoritmo e a agregação vai juntar conceitos.
>
> Prof. Juliana Mayra

## Questão 03 
​Considere que temos uma classe OperacaoMatematica que implementa SOMA, SUBTRAÇÃO, DIVISÃO e MULTIPLICAÇÃO. Várias sub-classes conseguem executar essas operações. Marque a alternativa que implementa esse processo.
### Resposta:
- [x] a) ​Herança
- [ ] b) ​Polimorfismo
- [ ] c) ​Composição
- [ ] d) ​Recursividade
- [ ] e) ​Agregação

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Quando temos subclasses de uma classe implementa-se o conceito de herança, onde as subclasses herdam os métodos da superclasse.
>
> Prof. Juliana Mayra

## Questão 04 
​Em programação orientada a objeto, duas ou mais classes, derivadas de uma mesma superclasse, podem invocar métodos que têm a mesma identificação (assinatura), mas comportamentos distintos, especializados para cada classe derivada, usando para tanto uma referência a um objeto do tipo dessa superclasse.
​Marque a alternativa que define o processo adotado a Orientação a Objetos.
### Resposta:
- [ ] a) ​abstração
- [ ] b) ​acoplamento
- [ ] c) ​encapsulamento
- [ ] d) herança
- [x] e) ​polimorfismo

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A questão traz um exemplo de polimorfismo. abstração é o que se aplica para definição do modelo. acoplamento diz respeito a quão junto os processos se dependem. encapsulamento é a proteção dos dados e herança é o processo de utilização de métodos e atributos de uma super classe.
>
> Prof. Juliana Mayra

## Questão 05 
​Em programação orientada a objeto, a(o) __________ permite criar objetos que incorporam propriedades e métodos de outros objetos.
​Assinale a alternativa que preenche corretamente a lacuna do texto acima.
### Resposta:
- [ ] a) ​abstração
- [ ] b) ​acoplamento
- [ ] c) ​encapsulamento
- [x] d) ​herança
- [ ] e) ​polimorfismo

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Em programação orientada a objeto, a herança permite criar objetos que incorporam propriedades e métodos de outros objetos. abstração é o que se aplica para definição do modelo. acoplamento diz respeito a quão junto os processos se dependem. encapsulamento é a proteção dos dados e polimorfismo é quando um objeto pode se comportar de forma diferente.
>
> Prof. Juliana Mayra

## Questão 06 
​Em relação à Programação Orientada a Objetos e Programação Estruturada, na programação orientada a objetos podemos considerar alguns pilares, que são necessários para considerar a linguagem orientada a objeto. Referente ao princípio pelo qual duas ou mais classes derivadas de uma mesma superclasse podem invocar métodos que têm a mesma identificação (assinatura), mas comportamentos distintos, especializados para cada classe derivada, usando para tanto uma referência a um objeto do tipo da superclasse.
​Marque a alternativa que indica o princípio que define a situação apresentada.
### Resposta:
- [ ] a) ​Encapsulamento
- [ ] b) ​Abstração
- [x] c) ​Polimorfismo
- [ ] d) ​Herança
- [ ] e) ​Interface

> SOLUÇÃO DO PROFESSOR ✨
>
> ​O exemplo da questão representa o conceito de polimorfismo. Encapsulamento. define a proteção dos dados. Abstração é o que se aplica para definição do modelo. Herança define o processo de utilização dos métodos e atributos da super classe. Interface define um contrato entre a super classe e subclasse.
>
> Prof. Juliana Mayra