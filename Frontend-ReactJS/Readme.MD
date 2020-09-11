# Gustavo de Oliveira - Employees ReactJS Frontend

Neste repositório, trago o código fonte referente a segunda etapa do processo seletivo da Seven. 
O objetivo deste repositório é armazenar os arquivos e também ajudar a comunidade a se desenvolver , além de manter afiada minhas habilidades desenvolvendo usando a ReactJS.


## Versões

**11/09/2020**

- [x] Frontend desenvolvido com as seguintes funcionalidades: 

- Estilização usando CSS+Bootstrap 4 (src/Paginas/App.css)
- Página de autenticação, login com email e senha.(src/Paginas/Login.js)
- Página inicial de listagem de empregados. (src/Paginas/Inicio.js)
- Página de criação de empregados.(src/Paginas/CriarEmpregado.js)
- Página de edição de empregados.(src/Paginas/EditarEmpregado.js)
- Sistema de busca de empregados através do ID. (src/Paginas/Inicio.js)
- Sistema de exclusão de empregados. (src/Paginas/Inicio.js)
- Sistema de roteamento de páginas para evitar vulnerabilidades de nivel de acesso e permissão dentro da plataforma. (Funções presentes dentro das funcoes componentDidMount() + arquivo => src/Rotas.js)

## Funcionamento e estrutura da aplicação:

Por ser um projeto simples, basicamente um CRUD, utilizei uma estrutura simples, tanto de arquivos quanto de código. Todas as telas da aplicação estão presentes dentro da pasta /Paginas/, e componentes de configuração um diretório antes, na raiz de /src/ .

Toda a aplicação foi feita usando classes e o constructor, não usei funções ( Por escolha própria, quando tenho a oportunidade de escolher, uso classes para aplicações ReacJS e funções para aplicações ReactNative). Busquei minimizar ao máximo todas as funções presentes na aplicação de forma colocar a maioria das ações simples dentro de actions independentes, por exemplo: OnClick={() => alert("Sou independente")} . Alem disso, para o redirecionamento de páginas usei a library react-router-dom, e para redirecionar usei uma estrutura de renderização condicional, ou seja, ao clicar em um botão uma tag é imprimida na tela e então esta tag faz o redirecionamento para uma determinada área.
Para a conexão com a API usei o Axios, também tenho experiencia com Api-Sauce, mas pra ReactJS prefiro o Axios. 

## Como rodar a aplicação

- Após clonar o repositório, considerando que você já tenha o ambiente para desenvolvimento ReactJS/NodeJS, use o comando abaixo para instalar as dependencias e rodar o software.

* $ npm install && npm start

Após instalar as dependencias e inicializar o processo, uma janela no seu navegador padrão será aberta para o uso da aplicação.