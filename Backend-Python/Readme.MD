# Gustavo de Oliveira - Employees API FLASK BACKEND

Neste repositório, trago o código fonte referente a segunda etapa do processo seletivo da Seven. 
O objetivo deste repositório é armazenar os arquivos e também ajudar a comunidade a se desenvolver , além de manter afiada minhas habilidades desenvolvendo usando a linguagem Python e também ReactJS.


## Versões

**11/09/2020**

- [x] API Flask desenvolvida, com endpoints: 

- GET /employees - Lista todos os empregados
- GET / employees /{id} - Busca um empregado por id
- POST / employees - Cria um novo empregado
- PUT / employees /{id} - Edita um empregado
- DELETE / employees /{id} - Deleta um empregado

## Funcionamento e estrutura da aplicação:

Geralmente, em meus projetos , uso um ambiente de homologação especial, com variáveis de ambiente e estrutura de pastas mais complexas o que agiliza a minha manutenção. Entretanto, neste projeto, estou prezando pela facil execução e compatibilidade do script usando apenas uma estrutura simples de pastas:

/Backend-Python/
=>index.py
=>functions/
==>mysql_connector.py

O arquivo index.py contém todos os endpoints e é nele que está armazenado todo código relacionado aos endpoints. O arquivo mysql_connector.py é o arquivo responsável por fazer a conexão com o banco de dados, com isso usei a função cmdmysql() , ondo seu argumento é a Query desejada.

Dentro da pasta Requeriments, existe um arquivo .sql, responsável por subir o ambiente dentro do banco de dados e popula-lo para primeiros testes.


## Como rodar a aplicação

Após clonar o repositório, considerando que você já tenha o ambiente para desenvolvimento Python3+ e um banco de dados MYSQL, em seu terminal ou CMD, use os comandos para instalar as dependencias:

* $ pip3 install flask
* $ pip3 install pymysql

- Acesse a pasta do repositório através do terminal ou CMD:

* $ cd /minhaestrutura/repositorioclonado/Requeriments

- Acesse seu banco de dados MYSQL

* $ mysql -u <user> -p <senha>

- Rode o comando para executar o arquivo .sql:

* $ source mysqlconfig.sql

- Ao terminar o comando, saia do mysql com o comando :

* $ exit;

- Entre na pasta da API

* $ cd /minhaestrutura/repositorioclonado/Backend-Python/

- Dentro do arquivo /minhaestrutura/repositorioclonado/Backend-Python/functions/mysqlconnector.py altere os dados referentes a conexão com o banco de dados de acordo com as configurações do seu ambiente. 

- E rode a API usando o comando:

* $ python3 index.py