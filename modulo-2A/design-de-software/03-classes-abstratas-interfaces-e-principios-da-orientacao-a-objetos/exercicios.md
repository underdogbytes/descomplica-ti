# Design de Software - Classe abstratas, interfaces e princípios da orientação a objetos

## Exercícios


## Questão 01 
Durante o desenvolvimento de uma aplicação orientada a objetos com Java, um Técnico criou uma interface para obrigar um conjunto de classes de diferentes origens a implementar certos métodos de maneiras diferentes, viabilizando a obtenção de polimorfismo.
​Marque a alternativa que indica o que a interface criada pelo Técnico pode considerar.

### Resposta:
- [ ] a) conter métodos implementados
- [ ] b) ser instanciada diretamente
- [ ] c) possuir um único construtor vazio
- [x] d) possuir métodos abstratos
- [ ] e) conter variáveis e métodos privados

> SOLUÇÃO DO PROFESSOR ✨
>
> Em uma interface os métodos são abstratos.
> ​A interface não pode ter métodos implementados e instanciados diretamente.​
> 
> Prof. Juliana Mayra

## Questão 02 
​Na linguagem Java, toda classe pode ser subclasse de alguma outra, mas existe a possibilidade de uma classe não possuir filhas (subclasse). Para tanto, basta que a definição de tal classe possua uma palavra reservada.
​Marque a alternativa que indica a palavra chave que impossibilita a criação de uma subclasse.

### Resposta:
- [x] a) ​final
- [ ] b) ​super
- [ ] c) ​extends
- [ ] d) ​implements
- [ ] e) ​constructa

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Declarar uma classe como final impossibilita a herança.
>  ​super define as características e métodos de uma super classe. extends define uma subclasse. implements define uma interface, construct não é um parâmetro OO.​
> 
> Prof. Juliana Mayra


## Questão 03 
Classes abstratas são um recurso importante na linguagem Java, pois incentivam o polimorfismo e dão flexibilidade à modelagem de classes, favorecendo a abstração. A respeito de classes abstratas, considere as seguintes afirmativas:

1- Classes abstratas não podem conter atributos.
2- Uma classe abstrata pode conter métodos concretos.
3- O construtor de uma classe abstrata deve ser abstrato.
4- Classes abstratas não podem ser instanciadas.

Assinale a alternativa correta.
### Resposta:
- [ ] a) ​Somente a afirmativa 1 é verdadeira
- [x] b) Somente as afirmativas 2 e 4 são verdadeiras
- [ ] c) ​Somente as afirmativas 1 e 3 são verdadeiras
- [ ] d) ​Somente as afirmativas 1 e 4 são verdadeiras
- [ ] e) ​Somente as afirmativas 2, 3 e 4 são verdadeiras

> SOLUÇÃO DO PROFESSOR ✨
>
> Somente as afirmativas 2 e 4 são verdadeiras. Classes abstratas não podem ser instanciadas e podem conter atributos e o construtor não será abstrato. Uma classe pode implementar mais de uma interface.
>
> Prof. Juliana Mayra


## Questão 04 
Qual dos pilares da orientação a objetos consiste em separar aspectos externos dos internos da implementação de um objeto, ou seja, determinados detalhes ficam ocultos aos demais objetos e dizem respeito apenas ao próprio objeto?
### Resposta:
- [x] a) Encapsulamento
- [ ] b) Classe
- [ ] c) Atributos
- [ ] d) Herança
- [ ] e) Polimorfismo

> SOLUÇÃO DO PROFESSOR ✨
>
> Encapsulamento: serve para controlar o acesso aos atributos e métodos de uma classe.
>
> Prof. Juliana Mayra

## Questão 05 
Relacione as duas colunas quanto aos conceitos básicos de programação orientada a objetos.

(1) interface
(2) herança
(3) método

(A) determinam o comportamento dos objetos de uma classe.
(B) é um contrato entre a classe e o mundo externo.
(C ) é o mecanismo pelo qual uma classe pode estender outra classe ou ser estendida por outra classe.
Assinale a alternativa que apresenta a sequência correta.
### Resposta:
- [ ] a) ​1A, 2C, 3B
- [x] b) ​1B, 2C, 3A
- [ ] c) ​1C, 2B, 3A
- [ ] d) ​1B, 2A, 3C
- [ ] e) ​1A, 2B, 3C

> SOLUÇÃO DO PROFESSOR ✨
>
> Métodos determinam o comportamento dos objetos de uma classe, interface é um contrato entre a classe e o mundo externo e herança é o mecanismo pelo qual uma classe pode estender outra classe ou ser estendida por outra classe.
>
> Prof. Juliana Mayra

## Questão 06 
​O paradigma da Orientação a Objetos tem muitos conceitos que são aplicados para melhorar o tratamento dos dados. Muitos são os conceitos: herança, polimorfismo, interface, classe abstrata, encapsulamento. Marque a alternativa que indica a necessidade de uma classe implementar recursos comuns a duas ou mais classes.
### Resposta:
- [ ] a) ​Encapsulamento
- [ ] b) ​Métodos
- [ ] c) Classes externas
- [x] d) Classe abstrata
- [ ] e) Polimorfismo

> SOLUÇÃO DO PROFESSOR ✨
>
> ​As classes abstratas devem conter pelo menos um método abstrato, que não tem corpo; é um tipo especial de classe que não há como criar instâncias dela; É usada apenas para ser herdada, funciona como uma superclasse; uma grande vantagem é que força a hierarquia para todas as subclasses; é um tipo de contrato que faz com que as subclasses contemplem as mesmas hierarquias e/ou padrões.​
>
> Prof. Juliana Mayra