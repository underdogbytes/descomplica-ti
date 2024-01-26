# Análise e Levantamento de Requisitos de Software: Representação de Requisitos

## Exercícios


## Questão 01 
Leia atentamente as sentenças a seguir referentes aos conceitos do Diagrama de Caso de Uso e atribua V para as sentenças VERDADEIRAS e F para as sentenças FALSAS:

(     ) Representa os requisitos do sistema em estudo.

(     ) Cada caso de uso representado poderá ter interação com o ator ou com outro caso de uso.

(     ) A interação caso de uso - caso de uso que representa a relação opcional é   chamada de <include>.

(     ) A interação caso de uso - caso de uso que representa uma obrigatoriedade na realização é chamada <include>.

(     ) A interação caso de uso - caso de uso que representa a relação opcional é chamada de <extend>.

(     ) A interação caso de uso - caso de uso que representa uma obrigatoriedade na realização é chamada <extend>.

Assinale a alternativa correta, considerando as opções de cima para baixo:

### Resposta:
- [ ] a) F - V -  V - F - F - V
- [ ] b) ​V - F -  F - V - V - F
- [x] c) ​V - V -  F - V - V - F
- [ ] d) ​F - V -  F - V - V - F
- [ ] e) ​F - F -  V - F - F - V​

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra C é a alternativa correta, pois o diagrama de caso de uso representa os requisitos do sistema em uso e as interações possíveis de representação são ator - caso de uso / caso de uso - caso de uso. A interação do tipo <include> representa a obrigatoriedade de execução e a interação do tipo <extend> representa a execução opcional, em função do atendimento a uma regra de negócio.
> 
> Prof. Carolyna Santiago 

## Questão 02 
Observe o seguinte diagrama de caso de uso:
<img src="./questao-02.png" />
Assinale a alternativa correta:

### Resposta:
- [x] a) “Marcar Consulta” é um caso de uso que pode ser realizado pela Secretária e também pelo Dentista, que são atores especializados de Funcionário.
- [ ] b) ​“Apurar Faturamento” é um caso de uso que pode ser realizado tanto pela Secretária quanto pelo Dentista, que são atores especializados de Funcionário.
- [ ] c) ​A generalização de ator é uma representação que oferece visibilidade dos atores que realizam algum caso de uso no sistema.
- [ ] d) ​Casos de uso representados para atores especializados não podem utilizar de interação caso de uso - caso de uso.
- [ ] e) ​A representação da interação do caso de uso “Apurar Faturamento” não está correta. A interação deve estar ligada ao Funcionário.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra A é a alternativa correta, pois casos de uso interagindo com atores representados na generalização podem ser realizados por todos os atores da especialização. A interação caso de uso - caso de uso pode ser usada em qualquer necessidade, independente de estar em uma generalização de atores. Casos de uso com a interação direta em atores na especialização só poderão ser realizados por eles.
> 
> Prof. Carolyna Santiago


## Questão 03 
Observe o seguinte Diagrama de Caso de Uso:
<img src="./questao-03.png"/>
Considere que no estacionamento XXX, quando o cliente entra para estacionar, o atendente registra sua entrada, atualizando a vaga ocupada e entrega um comprovante para o cliente. Se o cliente ainda não possuir suas informações cadastradas, o atendente cadastrará.

Analise as afirmativas:

I - A interação entre o “Emitir comprovante de entrada” e “Registrar Entrada” é do tipo <include>, assim como com o “Atualizar Vaga”.

II -  A interação entre o “Manter Cliente” e “Registrar Entrada” é do tipo <extend>.

III - Todas as interações são do tipo <include>, pois terão sempre que ser realizadas.

IV - A interação entre o “Manter Cliente” e “Registrar Entrada” é do tipo <include>. A direção da seta que está ao contrário.

Assinale a alternativa correta:

### Resposta:
- [ ] a) As alternativas I e III estão corretas.
- [x] b) ​As alternativas I e II estão corretas.
- [ ] c) ​As alternativas I e IV estão corretas.
- [ ] d) As alternativas II e III estão corretas.
- [ ] e) ​As alternativas II e IV estão corretas.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra B é a alternativa correta, pois os casos de uso “Emitir comprovante de entrada” e “Atualizar Vaga” possuem interação do tipo <include>, sempre acontecem e, a interação do caso de uso “Manter Cliente” é do tipo <extend>, pois depende de uma condição.
> 
> Prof. Carolyna Santiago


## Questão 04 
O diagrama de caso de uso apresenta um conjunto de simbologias para modelar os requisitos de sistema e suas interações:

Marque a alternativa CORRETA que define o uso da generalização de casos de uso:

### Resposta:
- [ ] a) Representam a interação obrigatória entre casos de uso.
- [ ] b) ​Representam a interação opcional entre casos de uso.
- [ ] c) Oferece a visibilidade dos diversos tipos de atores e suas interações com os casos de uso.
- [ ] d) ​Mostra a interação de atores e casos de uso.
- [x] e) ​Provê a reutilização de procedimentos por casos de uso.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra E é a alternativa correta, pois a generalização de caso de uso, por compartilhar de requisitos comuns, viabiliza a reutilização.
> 
> Prof. Carolyna Santiago


## Questão 05 
A UML é uma linguagem de modelagem proposta na metodologia Orientada a Objetos que apresenta várias vantagens. Analise as seguintes sentenças abaixo e identifique quais representam vantagem da UML:

I - Facilidade na comunicação;

II - Composição da documentação;

III - Ferramentas independentes;

IV - Fácil alterabilidade;


Marque a alternativa correta:

### Resposta:
- [ ] a) As afirmativas I, II, III e IV estão corretas.
- [ ] b) ​As afirmativas I, II e III estão corretas.
- [ ] c) ​As afirmativas I, III e IV estão corretas.
- [x] d) ​As afirmativas I, II e IV estão corretas.
- [ ] e) ​As afirmativas II, III e IV estão corretas.

> SOLUÇÃO DO PROFESSOR ✨
>
> A letra D é a alternativa correta, pois as ferramentas propostas pela UML são integradas. A cada modelo utilizado a construção do sistema vai se definindo e minimizando erros.
> 
> Prof. Carolyna Santiago


## Questão 06 
(Enade, 2011 - Adaptado)

O conjunto de casos de uso representa as possíveis interações que serão representadas nos registros do sistema. A seguir, a figura desenvolve um exemplo de biblioteca e mostra outros casos de uso nesse ambiente:
<img src="./questao-06.png"/>
A figura também ilustra os pontos essenciais da notação de casos de uso. Os agentes no processo são representados por bonecos e cada tipo de interação é representada por uma elipse com um nome.

PORQUE

A UML é um padrão para a modelagem orientada a objetos e, assim, os casos de uso e a obtenção de requisitos com base em casos de uso são cada vez mais utilizados para obter requisitos.

Assinale a alternativa correta:

### Resposta:
- [x] a) As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.
- [ ] b) ​As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.
- [ ] c) ​A primeira asserção é uma proposição verdadeira, e a segunda é uma proposição falsa.
- [ ] d) ​A primeira asserção é uma proposição falsa, e a segunda é uma proposição verdadeira.
- [ ] e) ​Tanto a primeira quanto a segunda asserção são proposições falsas.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra A é a alternativa correta, pois as asserções são verdadeiras, mas correspondem às definições de simbologia do diagrama de caso e uso e da UML. A definição da UML não justifica a simbologia. A simbologia são imagens de representação adotadas no modelo.
> 
> Prof. Carolyna Santiago