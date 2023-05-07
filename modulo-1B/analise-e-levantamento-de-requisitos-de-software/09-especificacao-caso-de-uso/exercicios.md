# Análise e Levantamento de Requisitos de Software: Especificação de Caso de Uso

## Exercícios


## Questão 01 
A descrição de caso de uso é uma técnica praticada para detalhar os procedimentos dos casos de uso.  Sua construção implica no uso de várias regras.  Leia atentamente a lista de regras a seguir e analise as que aplicam na descrição de caso de uso:

I - Definir os laços de repetição com uso de label.

II - Sentenças devem ser curtas.

III - Utilizar condicional quando desejar caminhos em função de uma condição.

IV - Utilizar um padrão para verbos nas ações.

Marque a alternativa correta.

### Resposta:
- [ ] a) As alternativas I e II estão corretas.
- [ ] b) ​As alternativas I e III estão corretas.
- [ ] c) ​As alternativas I e IV estão corretas.
- [ ] d) ​As alternativas II e III estão corretas.
- [x] e) ​As alternativas II e IV estão corretas.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra E é a alternativa correta, pois na descrição de caso de uso não representamos laços de repetição e condição, tornando as afirmativas I e III incorretas.​​
>
> Prof. Carolyna Santiago


## Questão 02 
No uso do diagrama de caso de uso, muitas vezes, é necessário adicionar informações para que fique claro os requisitos que serão atendidos. Podemos citar a pré-condição, por exemplo.

Considere a seguinte situação de negócio:

“Na loja de calçados “Belos pés” a venda acontece a partir de uma solicitação do cliente. Todos os clientes devem estar cadastrados neste momento. A venda é realizada e a nota fiscal é emitida. O cliente não leva o produto na hora, pois é disponibilizado um serviço de entrega, que providencia a chegada do produto em até 3 horas em sua residência ou local desejado.  Desta forma, ao finalizar a venda, a solicitação do cliente já fica disponível para entrega.”

Marque a alternativa correta que define uma PRÉ-CONDIÇÃO da venda.

### Resposta:
- [x] a) Ter clientes cadastrados.
- [ ] b) Realizar emissão de Nota Fiscal.
- [ ] c) ​Receber solicitação de cliente.
- [ ] d)​ Liberar venda para entrega.
- [ ] e) Realizar entrega.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra A é a alternativa correta, pois a pré-condição indica tudo que deve estar pronto no ambiente antes da realização do caso de uso. No caso, o cliente já deverá estar cadastrado quando fizer a solicitação, o que caracteriza a pré-condição do caso de uso da venda. “Realizar emissão de Nota Fiscal” é um procedimento que acontece na venda, assim como “Receber solicitação de Cliente” e “Liberar venda para entrega”. “Realizar entrega” é um procedimento que acontece após a venda.
>
> Prof. Carolyna Santiago


## Questão 03 
A descrição de caso de uso é utilizada para especificar os procedimentos realizados nos casos de uso no atendimento aos requisitos, podendo ser escrita como EXPANDIDA e NÃO EXPANDIDA.

Marque a alternativa que define um critério considerado para a escrita da descrição de caso de uso EXPANDIDA.

### Resposta:
- [ ] a) Ter poucas regras.
- [x] b) ​Apresentar complexidade em sua execução.
- [ ] c) Requerer pequenos relatos dos objetivos.
- [ ] d) ​Ter pré-condição e pós-condição.
- [ ] e) ​Ter somente pré-condição.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra B é a alternativa correta, pois o desenvolvimento da descrição de caso de uso Expandido é requerido em procedimentos complexos que envolvam muitas regras, o que torna as letras A e C incorretas por tratarem de requisitos para Descrição de Caso de Uso não Expandida. O fato de ter pós-condição e pré-condição não é requisito para os tipos de descrição, pois devem ser declarados para os dois tipos.
>
> Prof. Carolyna Santiago


## Questão 04 
A descrição de caso de uso expandida é dividida em três partes no fluxo normal.

Leia atentamente a seguinte descrição.

FLUXO NORMAL

1. Sistema Apresenta Tela de Locação.

2. Vendedor Informa Placa de VEÍCULO.

3. Sistema obtém dados de VEÍCULO.

4. Sistema obtém dados de CLIENTE.

5. Sistema apresenta dados de CLIENTE.

6. Sistema obtém dados de VAGA.

7. Sistema apresenta lista de VAGA.

8. Vendedor escolhe VAGA.

9. Vendedor clica CONFIRMA.

10. Sistema altera  VAGA.

11. Sistema Inclui “Emitir Comprovante de Locação”

12. Sistema Encerra Caso De Uso.

Marque a alternativa que define corretamente a parte que se refere às sentenças definidas nas linhas 10 e 11.

### Resposta:
- [ ] a) ENTRADA
- [ ] b) ​PROCESSAMENTO
- [x] c) ​SAÍDA
- [ ] d) ​GRAVAÇÃO
- [ ] e) ​LEITURA

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra C é a alternativa correta, pois representa a atualização dos dados e a finalização do processamento. A ENTRADA corresponde a apresentação das informações que darão subsídios para o processamento. O PROCESSAMENTO é a confirmação da realização. GRAVAÇÃO e LEITURA não são partes definidas neste contexto.
>
> Prof. Carolyna Santiago


## Questão 05 
5. Observe o seguinte diagrama de caso de uso:
<img src="./questao-05.png" />
Suponha que você é o analista de sistemas responsável por especificar o caso de uso “Manter Consulta”.

Marque a alternativa que apresenta uma afirmativa correta.

### Resposta:
- [ ] a) O caso de uso “Marcar Consulta” não terá citação em sua especificação dos casos de uso que interagem com ele.
- [ ] b) O caso de uso “Marcar Consulta” com interação <include> será definido no fluxo alternativo.
- [ ] c) ​O caso de uso “Marcar Consulta” terá sua especificação incluída na descrição do caso de uso “Manter Consulta”.
- [x] d) O caso de uso “Remarcar Consulta” com interação <extend> será definido no fluxo alternativo.
- [ ] e) ​Os casos de uso “Marcar Consulta”, “Atualizar Consulta” estarão especificados dentro da descrição do caso de uso “Manter Consulta”, em função da interação ser <include>.

> SOLUÇÃO DO PROFESSOR ✨
>
> A letra D é a alternativa correta, pois a interação <extend> é definida no Fluxo Alternativo e, a interação <include> no Fluxo Normal. Cada caso de uso possui a sua própria especificação e, casos de uso com interação ao caso de uso que está sendo especificado, deve ter mencionada a sua chamada para execução.
>
> Prof. Carolyna Santiago


## Questão 06 
Analise as seguintes afirmativas.

I - As descrições de casos de uso é um recurso para apresentar os procedimentos realizados por cada caso de uso.

II - Quando se tem interações caso de uso - caso de uso a descrição de caso de uso é escrita em uma mesma especificação.

III - As descrições de casos de uso apresentam em sua composição no Fluxo Normal procedimentos de entrada, processamento e saída, pois se referem a realização da necessidade do negócio.

IV - Nas descrições de caso de uso é possível identificar as informações que são utilizadas no processamento dos casos de uso.

Marque a alternativa correta:

### Resposta:
- [ ] a) As afirmativas I, II e III estão corretas.
- [ ] b) ​As afirmativas I, II e IV estão corretas.
- [X] c) ​As afirmativas I, III e IV estão corretas.
- [ ] d) ​As afirmativas II, III e IV estão corretas.
- [ ] e) ​As afirmativas I, II, III e IV estão corretas.

> SOLUÇÃO DO PROFESSOR ✨
>
> ​A letra C é a alternativa correta, pois a afirmativa II não está correta porque cada caso de uso possui a sua própria descrição. As demais afirmativas estão corretas.
>
> Prof. Carolyna Santiago
