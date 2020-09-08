Seven Frontend 

Um cliente da Seven solicitou o desenvolvimento de Frontend que contempla o seguinte cenário: Um desenvolvedor Backend está desenvolvendo um sistema que precisa de um Frontend simples, mas ele não tem conhecimento para desenvolver tal Frontend. 

A Seven quer resolver o problema desse desenvolvedor. A ideia é que através de uma tela simples o desenvolvedor consiga criar um novo “Modelo” e inserir dados (instâncias do “Modelo”) para serem utilizados pelo backend.

 

Um caso de uso de exemplo seria:

· Desenvolvedor backend cria um novo “Modelo” com o nome “Employees"

· Desenvolvedor backend configura os atributos do modelo: id:string/number, name:string, bornDate:date, salary:decimal, position:string

 

A partir desse cadastro um recurso REST para gerenciamento desse modelo com os seguintes métodos devem estar disponíveis:

· GET /employees - Lista todos os empregados

· GET / employees /{id} - Busca um empregado por id

· POST / employees - Cria um novo empregado

· PUT / employees /{id} - Edita um empregado

· DELETE / employees /{id} - Deleta um empregado

 

Com isso o desenvolvew
 

O que deve ser feito:

· Pensar na melhor arquitetura para a solução, pensando em evolução, escalabilidade, etc..

· Descrever brevemente a arquitetura proposta

· Desenvolver o frontend dessa versão inicial. Se quiser desenvolver autenticação também fique à vontade, mas seria um plus.

· O código-fonte deve ser disponibilizado na sua conta do Github, em um repositório com o nome seven-inc, juntamente com as instruções para execução e testes da aplicação (arquivo README)

 

Considerações importantes:

· Você precisa utilizar a tecnologia Reactjs.

· Serão avaliados: organização do código, simplicidade da solução, conhecimentos da linguagem/framework utilizado, cobertura de testes, extensibilidade e manutenibilidade.