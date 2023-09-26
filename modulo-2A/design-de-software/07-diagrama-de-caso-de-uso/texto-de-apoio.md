# Diagrama de Caso de Uso

O diagrama de casos de uso é um diagrama voltado para o ponto de vista do usuário, que foca na evolução do sistema. Descreve as principais funcionalidades do sistema e as interações de funcionalidades com os usuários, a fim de integrar com o sistema. O diagrama faz uma referência abstrata às atividades e tarefas dos usuários, que precisam verificar as ações com as quais eles vão interagir interagir com o sistema.



## Diagrama Casos de Uso

Para construir um diagrama de caso de uso precisamos conhecer os objetos que formam a estrutura do diagrama:

Cenário: são os eventos que envolvem as ações do usuário com o sistema;

Ator: elementos que interagem com os sistemas. Representam os papéis desempenhados por elementos externos aos usuários. Exemplo: humano (usuário), dispositivo de hardware ou outro sistema.

Como encontrar atores:

- Quem usa o sistema?

- Quem instala ou mantém o sistema?

- Quem inicia/desliga o sistema?

- Que outros sistemas usam o sistema?

- Quem recebe informações do sistema?

- Quem provê informações do sistema?

Use case (caso de uso): representa uma funcionalidade do sistema que engloba um requisito funcional. É iniciado por um ator ou por outro caso de uso. Nomeie os casos de uso iniciado com um verbo.

Como identificar um caso de uso?

1º Método: identificar os atores relacionados a um sistema ou organização. Para cada ator, identificar os processos que eles iniciam ou os quais eles participaram.

2º Método: Identificar os eventos externos aos quais um sistema deve responder. Relacionar os eventos a atores e a casos de uso.

Interação: é o elemento que liga o ator com o caso de uso.

Relacionamento de Associação: indica que há uma interação (comunicação) entre um caso de uso e um ator. É possível que um ator possa se comunicar com vários casos de uso.



## Relacionamento de Generalização:

- Generalização de atores são quando dois ou mais atores podem se comunicar com o mesmo conjunto de casos de uso. Um filho (herdeiro) pode se comunicar com todos os casos de uso que seu pai se comunica.

- Generalização de caso de uso: O caso de uso filho herda o comportamento e o significado do caso de uso pai. O caso de uso filho pode incluir ou sobrescrever o comportamento do caso de uso do pai. O caso de uso filho pode substituir o caso de uso pai em qualquer lugar que ele apareça.

Relacionamento de Dependência: (extensão) representa uma variação/extensão do comportamento do caso de uso base. O caso de uso estendido só é executado sob certas circunstâncias. Expressar rotinas de exceção ou desdobramentos de um caso de uso. Separa parte obrigatórias de partes opcionais (partes obrigatórias – caso de uso base, partes opcionais – caso de uso estendido). Separar trechos que dependem de interação com um determinado ator.

Descrição de casos de uso: contém o nome do caso de uso e uma descrição textual de sua funcionalidade. A descrição típica contém a identificação do ator que iniciou o caso de uso, pré-requisitos (se houver) de caso de uso e descrição textual do fluxo normal e de fluxo alternativos (se houver).

Descrição de caso de uso detalhada: contém nome, descrição sucinta, atores, pré-condições, pós-condições, fluxo básico, fluxos alternativos, fluxos de exceção, estruturas de dados, regras de negócio e observações.




Para exemplificar o diagrama de caso de uso, vamos usar o mesmo exemplo do diagrama de atividades para seguir com uma linha de raciocínio sobre um sistema para cadastrar disciplinas da escola. O cenário é a escola, os atores são alunos, professores e disciplinas, use case é o cadastro de disciplina:
Fonte: Autor.
Fonte: Autor.

Para entender primeiro é preciso organizar os atores, depois colocar Use case na posição central da atividade dos atores, que no caso é a consulta do aluno pela disciplina e a verificação do professor, sendo guiado pela guia entre os atores com uma interação ou do professor porque ele mesmo é sempre analisado junto a disciplina.

 

 

Atividade Extra

Para saber mais sobre um diagrama de classe, veja o exemplo “Criar um diagrama de caso de uso UML”, no site da Microsoft Support.

 



Referência Bibliográfica

GALLOTTI, G. M. A. (Org.). Arquitetura de software. Pearson, 2017.

SOMMERVILLE, I. Engenharia de software. 10.ed. Pearson, 2019.

PFLEEGER, S. L. Engenharia de software: teoria e prática. 2.ed. Pearson. 2003.