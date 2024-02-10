# Compliance & Qualidade: Arquitetura de Software

## Exercícios


## Questão 01 
Sobre a refatoração de componentes e da arquitetura de um software, assinale a alternativa correta:
### Resposta:
- [ ] a) A refatoração de componentes e da arquitetura são ambos triviais e com custo zero associado.
- [ ] b) A refatoração de componentes possui custo zero, mas a refatoração de arquitetura possui um grande custo associado.
- [x] c) A refatoração de componentes possui custo menor (mas maior que zero) e a refatoração de arquitetura possui um grande custo associado.​
- [ ] d) A refatoração de componentes possui custo menor e a refatoração de arquitetura possui custo zero.
- [ ] e) A refatoração de componentes possui custo menor e a refatoração de arquitetura possui custo zero associado.

> SOLUÇÃO DO PROFESSOR ✨
>
> A refatoração de componentes e da arquitetura possuem custos maiores que zero. Adicionalmente, a refatoração de componentes possui custo menor, e a refatoração da arquitetura possui um grande custo associado.​
> 
> Prof. Beatriz da Silva Oliveira


## Questão 02 
Sobre os objetivos de se descrever a arquitetura de um sistema, assinale a alternativa correta:
### Resposta:
- [x] a) Descrevemos uma arquitetura para permitir o reuso, facilitar a comunicação entre partes interessadas e permitir uma análise de sistema.
- [ ] b) Descrevemos uma arquitetura para permitir o reuso e facilitar a comunicação entre partes interessadas, apenas.
- [ ] c) Descrevemos uma arquitetura para facilitar a comunicação entre partes interessadas e permitir uma análise de sistema, apenas.
- [ ] d) Descrevemos uma arquitetura para permitir o reuso, apenas.
- [ ] e) Descrevemos uma arquitetura para facilitar a comunicação entre partes interessadas, apenas.

> SOLUÇÃO DO PROFESSOR ✨
>
> Descrevemos uma arquitetura para permitir o reuso, facilitar a comunicação entre partes interessadas e permitir uma análise de sistema. A alternativa A é a única que possui todos os objetivos descritos no texto de apoio. A alternativa B possui apenas o objetivo de permitir o reuso, facilitar a comunicação entre partes interessadas e destaca que seriam os únicos objetivos, o que não é verdade pois há outros objetivos não descritos nesta alternativa. De forma similar, a alternativa C descreve apenas o objetivo de facilitar a comunicação entre partes interessadas e permitir uma análise de sistema, a alternativa D destaca apenas o objetivo de permitir o reuso, e a alternativa E apenas o objetivo de facilitar a comunicação entre partes interessadas.​
> 
> Prof. Beatriz da Silva Oliveira

## Questão 03 
Sobre o modelo 4+1, assinale a alternativa que não é uma visão deste modelo:
### Resposta:
- [ ] a) visão física
- [ ] b) visão lógica
- [ ] c) visão de desenvolvimento
- [ ] d) visão de processo
- [x] e) visão de negócio

> SOLUÇÃO DO PROFESSOR ✨
>
> A visão de negócio não é uma das visões do modelo 4+1, que possui as visões lógica, processo, desenvolvimento, física e de casos de uso (SOMMERVILLE, 2019), conforme descrito no texto de apoio no trecho: “Por exemplo, o modelo de arquitetura 4+1 possui as seguintes visões: lógica, processo, desenvolvimento, física e de casos de uso (SOMMERVILLE, 2019)”. Desta forma, as alternativas A, B, C e D são alternativas que descrevem visões do modelo 4+1 e a alternativa E descreve uma visão que não faz parte do modelo 4+1. Como o enunciado pede que seja assinalada a alternativa que não é visão do modelo 4+1, então a alternativa E deve ser assinalada.
> 
> Prof. Beatriz da Silva Oliveira

## Questão 04 
Sobre os tipos de modelos UML, é correto afirmar:
### Resposta:
- [ ] a) Há dois tipos de modelagem: a modelagem estática descreve como os componentes se comunicam entre si, enquanto a modelagem dinâmica define os componentes de um sistema e sua estrutura​
- [x] b) Há dois tipos de modelagem: a modelagem estática define os componentes de um sistema e sua estrutura, enquanto a modelagem dinâmica descreve como os componentes se comunicam entre si​
- [ ] c) Há somente um tipo de modelagem: a modelagem estática, que define os componentes de um sistema e sua estrutura
- [ ] d) Há somente um tipo de modelagem: a modelagem dinâmica, que descreve como os componentes se comunicam entre si
- [ ] e) Há somente um tipo de modelagem: a modelagem híbrida, que descreve os componentes de um sistema e sua estrutura

> SOLUÇÃO DO PROFESSOR ✨
>
> Afirma corretamente que há dois tipos de modelagem UML: estática e dinâmica, e descreve corretamente cada uma delas. A alternativa A afirma corretamente que há dois tipos, porém descreve de forma errada a modelagem estática e a modelagem dinâmica. As alternativas C e D descrevem corretamente as modelagens estática e dinâmica respectivamente, porém afirmam de forma incorreta que há somente um tipo de modelagem. A alternativa E está incorreta pois afirma que há somente um tipo de modelagem que não existe.​
> 
> Prof. Beatriz da Silva Oliveira

## Questão 05 
Sobre trade-offs arquiteturais, assinale a alternativa correta:
### Resposta:
- [ ] a) Não são resultado de conflitos entre diferentes requisitos de um sistema e estão relacionados a decisões de projeto
- [x] b) São resultado de conflitos entre diferentes requisitos de um sistema e estão relacionados a decisões de projeto
- [ ] c) São resultado de conflitos entre diferentes requisitos de um sistema e não estão relacionados a decisões de projeto
- [ ] d) Não são resultado de conflitos entre diferentes requisitos de um sistema e não estão relacionados a decisões de projeto
- [ ] e) São resultado de conflitos entre tecnologias diferentes e não estão relacionados a decisões de projeto.

> SOLUÇÃO DO PROFESSOR ✨
>
> Os trade-offs arquiteturais são resultado de conflitos entre diferentes requisitos de um sistema e estão relacionados a decisões de projeto, conforme mencionado no texto de apoio: “Desta forma, ao entender os diferentes requisitos de um sistema e tomar decisões arquiteturais, podemos identificar estes potenciais conflitos (trade-offs arquiteturais) e buscar obter o melhor compromisso entre requisitos conflitantes presentes na especificação de um projeto. Esses compromissos serão evidenciados em decisões de projeto”. Desta forma, a alternativa B está correta, e as alternativas A, C e D estão incorretas. A alternativa E está incorreta pois afirma incorretamente que os trade-offs não estão relacionados a decisões de projeto.​
> 
> Prof. Beatriz da Silva Oliveira

## Questão 06 
Leia o trecho abaixo:

“Nos processos ágeis, é geralmente aceito que um estágio inicial do processo de desenvolvimento ágil esteja focado na criação do projeto da arquitetura geral do sistema. O desenvolvimento incremental das arquiteturas geralmente não é bem-sucedido. É relativamente fácil refatorar os componentes em resposta às mudanças. No entanto, é caro refatorar a arquitetura do sistema porque é possível ter de modificar a maior parte dos componentes do sistema para adaptá-los às mudanças da arquitetura.” (SOMMERVILLE, I. Engenharia de Software, 10ª edição. Addison Wesley, 2019)


Considere as seguintes afirmações:

I – A arquitetura de software não é necessária no Modelo Ágil, pois basta ter código funcional

II – A arquitetura de software descreve os componentes de um sistema e suas relações

III – Dentre outros objetivos, descrevemos uma arquitetura de um sistema para analisar este sistema

A alternativa que classifica corretamente as afirmações entre Verdadeiro (V) e Falso (F) é:

​
### Resposta:
- [ ] a) F – F – F
- [ ] b) V – V – V
- [ ] c) F – V – V
- [ ] d) F – V – F
- [ ] e) V – F – V

> SOLUÇÃO DO PROFESSOR ✨
>
> A arquitetura de software é necessária independente da metodologia utilizada, a arquitetura descreve os componentes de um sistema e suas relações, e um dos objetivos para descrever uma arquitetura de um sistema para analisar este sistema e tomar decisões de projeto.​
> 
> Prof. Beatriz da Silva Oliveira