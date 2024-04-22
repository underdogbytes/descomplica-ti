# Arquitetura de Computadores do Século XXI: Bancos de Dados

## Exercícios


## Questão 01 
Sobre Banco de Dados, assinale a alternativa CORRETA:

### Resposta:
- [ ] a) O Banco de Dados é o software responsável pelo gerenciamento dos dados
- [ ] b) ​O SGDB (Sistema Gerenciador de Banco de Dados) representa o arquivo físico de dados, onde estão armazenados os dados de diversos sistemas, para consulta e atualização pelo usuário
- [x] c) ​Um banco de dados relacional armazena dados em tabelas. Tabelas são organizadas em colunas, e cada coluna armazena um tipo de dados (inteiro, números reais, strings de caracteres, data, etc.). Os dados de uma simples INSTÂNCIA de uma tabela são armazenados como uma linha
- [ ] d) ​A coleção de informações armazenadas é chamada de ESQUEMA do banco de dados, o que muda com frequência
- [ ] e) ​O projeto geral é chamado INSTÂNCIA do banco de dados, o que não muda com frequência

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Um banco de dados relacional é um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre si. As colunas da tabela contém atributos dos dados e cada registro geralmente tem um valor para cada atributo, facilitando o estabelecimento das relações entre os pontos de dados.
> 
> Prof. Lumie Zanazi

## Questão 02 
Considere um banco de dados que contém uma tabela com os atributos CPF, Nome, RG e Endereço, com milhões de registros. Sabe-se que cada pessoa tem seus próprios CPF e RG e um único nome, embora possa haver homônimos. Sendo assim, a dependência funcional que NÃO existe entre os atributos dessa tabela é:

Assinale a alternativa correta:

### Resposta:
- [ ] a) ​CPF -> Nome
- [ ] b) ​CPF -> RG
- [ ] c) ​Endereço -> CPF
- [ ] d) ​RG -> Endereço
- [ ] e) ​RG -> Nome

> SOLUÇÃO DO PROFESSOR ✨
>
> Este tipo de dependência ocorre quando um campo não-chave não depende diretamente da chave primária da tabela (nem mesmo parcialmente), mas depende de um outro campo não-chave na tabela.
> 
> Prof. Lumie Zanazi


## Questão 03 
Considere as afirmações abaixo sobre bancos de dados de objetos.

> I - Identidade de Objetos: os objetos possuem identidades únicas, independentes de seus valores de atributos e são geradas pelo Sistema Gerenciador de Banco de Dados (SGBD).
> 
> II - Polimorfismo e sobrecarga de operadores: as operações de nomes de método podem ser sobrecarregadas com diversas implementações, para que se apliquem a diferentes tipos de objetos.
> 
> III - Extensões: todos os objetos persistentes de um determinado tipo podem ser armazenados em uma extensão; as extensões correspondentes a uma hierarquia de tipos possuem restrições de conjunto/subconjunto em suas coleções de objetos persistentes.

Assinale a alternativa correta:

### Resposta:
- [ ] a) Apenas I
- [ ] b) ​Apenas II
- [ ] c) ​Apenas III
- [ ] d) ​Apenas I e II
- [x] e) ​Itens I, II e III

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Num banco de dados orientado a objetos puro, os dados são armazenados como objetos onde só podem ser manipulados pelos métodos definidos pela classe a que estes objetos pertencem. Os objetos são organizados numa hierarquia de tipos e subtipos que recebem as características de seus supertipos.
> 
> Prof. Lumie Zanazi

## Questão 04 
Há bancos de dados que combinam características de bancos de dados relacionais com bancos de dados orientados a objetos, e são conhecidos como:

Assinale a alternativa correta:

### Resposta:
- [ ] a) A paralelos
- [ ] b) distribuídos
- [x] c) objeto-relacionais
- [ ] d) ​semi-completos
- [ ] e) ​parciais

> SOLUÇÃO DO PROFESSOR ✨
>
> ​Um banco objeto-relacional é um banco que permite o armazenamento de objetos em suas tabelas .Uma classe representa um domínio, atuando como um data type para uma coluna. A classe, diferentemente dos bancos orientados a objetos, não representa mais um elemento envolvido em relacionamentos. Todas as regras de um banco relacional continuam válidas.
> 
> Prof. Lumie Zanazi

## Questão 05 
Um dos objetivos de um SGDO (Sistema de Gerenciamento de Dados de Objeto) é manter uma correspondência direta entre os objetos do mundo real e os objetos do banco de dados, de modo que os objetos não percam sua integridade e identidade e possam facilmente ser identificados e operados. Assim, um SGDO oferece uma identificação única a cada objeto independente armazenado no banco de dados. Essa identidade única normalmente é implementada por meio de um identificador de objeto (OID) único, gerado pelo sistema. A principal propriedade exigida de um OID é que ele seja:

Assinale a alternativa correta:

### Resposta:
- [ ] a) ​identificável
- [ ] b) ​indeterminável
- [ ] c) ​substituível
- [ ] d) ​escalável
- [x] e) ​imutável

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A principal propriedade exigida por um OID é que ele seja imutável, isto é, o valor do OID para um objeto não deve se alterar, com isso preserva-se a identidade do objeto do banco de dados.
>​Uma entidade é uma representação de um conjunto de informações sobre determinado conceito do sistema. Toda entidade possui ATRIBUTOS, que são as informações que referenciam a entidade.
> 
> Prof. Lumie Zanazi

## Questão 06 
O Modelo Entidade Relacionamento – MER é um dos padrões de modelagem conceitual mais difundida e utilizada. Sobre o MER, analise as afirmações a seguir:

>I - O conceito fundamental da abordagem do MER é a Entidade. Trata-se de um conjunto de objetos da realidade modelada sobre os quais deseja-se manter informações no banco de dados;
>
>II - Um Relacionamento é um conjunto de associações entre entidades. No Diagrama Entidade Relacionamento – DER, um relacionamento é comumente representado por um losango que deve ser ligado por linhas aos elementos que representam as entidades e participam do relacionamento;
>
>III - A Cardinalidade é o dado puro e isolado que está associado a cada ocorrência de uma entidade ou relacionamento.
>
>IV - Generalização e Especialização gera a ideia de herança de propriedade. Herdar propriedades significa que cada ocorrência da entidade especializada possui, além de suas próprias propriedades, também as propriedades da ocorrência da entidade genérica correspondente.

Assinale a alternativa correta:

### Resposta:
- [x] a) ​I, II e IV
- [ ] b) ​I, II e III
- [ ] c) ​II, III e IV
- [ ] d) ​III e IV
- [ ] e) ​Todas as afirmações

> SOLUÇÃO DO PROFESSOR ✨
>
> 
