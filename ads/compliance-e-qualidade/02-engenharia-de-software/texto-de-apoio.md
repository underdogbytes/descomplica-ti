# Engenharia de Software

No módulo anterior, destacamos que um dos aspectos diretamente relacionados com a qualidade de software é a gerência de um projeto. Nesta aula, iremos detalhar formas diferentes de realizar a gestão de um projeto de desenvolvimento de software. Convém primeiro descrever o que é um projeto. Empresas de desenvolvimento de software customizável entregam produtos personalizados para seus clientes, e para isso utilizam projetos. Projetos de desenvolvimento de software são iniciativas com prazo determinado que possuem como entregáveis principais o software propriamente dito, e sua documentação, destacando tanto o seu processo de desenvolvimento quanto instruções de uso.

Não há uma forma única de realizar a gestão de um projeto de desenvolvimento de software. Podemos utilizar metodologias diferentes de acordo com as necessidades e contexto de cada produto desejado. Iremos destacar a seguir duas metodologias principais: Waterfall e Ágil.

O modelo Waterfall (ou Cascata) é uma abordagem tradicional para gestão do desenvolvimento de software. De forma simplificada, consiste nas seguintes etapas (SOMMERVILLE, 2019):

Descoberta: a equipe entende o contexto de aplicação do sistema, como business drivers (ou seja, quais necessidades do negócio o sistema deve suportar);

Design: nesta etapa ocorre a especificação de requisitos, que irão descrever o comportamento esperado do sistema e formas diferentes de uso;

Implementação: arquitetos de software decidem como desenvolver o sistema e desenvolvedores implementam o design de acordo com os requisitos e as orientações dos arquitetos de software;

Testes: demonstrações e testes são realizados por equipes especializadas para contemplar tanto aspectos de negócio quanto aspectos técnicos para verificar se o sistema está em funcionamento conforme sua especificação de requisitos;

Implantação: nesta etapa ocorre a implantação do software no ambiente de produção, que é o ambiente do cliente. Podem ser necessários ajustes e refinamentos;

Manutenção: nesta etapa ocorre suporte e manutenção do produto digital até o final de sua vida útil.

Dentre as vantagens do Modelo Waterfall, estão sua previsibilidade, estimativa simplificada de orçamento final para todo o projeto, documentação ampla que auxilia na integração de novos desenvolvedores, sendo útil para projetos com um preço fixo.

Por outro lado, as desvantagens do Modelo Waterfall são: adequação limitada a mercados e ambientes estáveis, ruim em incorporar mudanças, e o produto pode divergir das necessidades do cliente devido a imprevistos.

Já a Metodologia Ágil na realidade é o conjunto dos seguintes princípios que orientam o desenvolvimento de software, conforme descrito no Manifesto Ágil (OLIVEIRA, 2018):

* Foco maior em interação do que em processos e ferramentas;
* Priorizar software em funcionamento em detrimento de documentação abrangente;
* É mais relevante a colaboração com o cliente do que a negociação de contrato com escopo definido;
* Priorizar responder a mudanças em detrimento a seguir um plano pré-definido.

No Método Ágil, o software é construído em várias iterações (e.g., sprints), de forma que a equipe projeta, desenvolve e testa versões incrementais de um produto. É comum a equipe coletar percepções e utilizar sugestões das partes interessadas a cada interação para refinamento do produto, e, desta forma, é possível lidar com incertezas e incorporar mudanças no projeto. Dentre as metodologias ágeis que nasceram após o Manifesto Ágil, destacam-se o XP (eXtreme Programming) e o SCRUM.

Dentre as vantagens do Modelo Ágil, estão: sua aderência a mudanças de escopo e requisitos durante o processo de desenvolvimento, detecção e correção de defeitos mais cedo e de forma proativa.

Dentre as desvantagens do Modelo Ágil, estão: possível aumento descontrolado de uso de recursos (tempo, equipe), menor previsibilidade de custo, e uma documentação incompleta pode prejudicar o produto resultante.

Fica evidente, portanto, que não há uma receita para a escolha de uma metodologia. Ambos métodos Waterfall e Ágil possuem suas vantagens e desvantagens, de forma que a escolha deve ser orientada de acordo com cada projeto de desenvolvimento de software.

Por exemplo, o desenvolvimento de um software para um ambiente que não apresenta muitas mudanças e que o cliente deseja previsibilidade de custos pode ser melhor gerenciado utilizando um modelo tradicional Waterfall. Por outro lado, se o cliente estiver disposto a participar ativamente do desenvolvimento e se o ambiente de aplicação apresentar mudanças frequentes, pode ser mais adequado usar o modelo Ágil.


## Atividade Extra

Observe alguns grandes defeitos de software que afetaram milhares de pessoas e diversos negócios (JEE; MACAULAY, 2023) para compreender a importância de garantir a qualidade de software. Lembre-se que usar uma metodologia adequada para o projeto é um dos aspectos que diretamente afetam a qualidade.


## Referências Bibliográficas

JEE, Charlotte; MACAULAY, Thomas. 10 grandes falhas da tecnologia nos últimos anos. IT Forum, Disponível em: <https://itforum.com.br/noticias/10-grandes-falhas-da-tecnologia-nos-ultimos-anos/>. Acesso em: 10/01/2023.

OLIVEIRA, B. S. de. Métodos ágeis e gestão de serviços de TI. Brasport: 2018.

SOMMERVILLE, I. Engenharia de Software, 10ª edição. Addison Wesley, 2019.

