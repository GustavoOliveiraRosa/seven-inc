DROP DATABASE seveninc;

CREATE DATABASE seveninc;

USE seveninc;

CREATE TABLE usuarios (
    id_usuario INT (11) NOT NULL AUTO_INCREMENT COMMENT 'Id do usuario',
    email VARCHAR (255) NOT NULL COMMENT 'E-mail',
    senha VARCHAR (255) NOT NULL COMMENT 'Senha',
    nivel_acesso VARCHAR (255) DEFAULT '0' COMMENT 'Nivel de acesso do usuario',
    PRIMARY KEY (id_usuario)
) CHARSET = utf8;

insert into usuarios (email,senha) values ("gustavoolrosa2019@gmail.com","123");

CREATE TABLE empregados (
    id INT (11) NOT NULL AUTO_INCREMENT COMMENT 'Id do cliente',
    nome VARCHAR (255) NOT NULL COMMENT 'Nome do usuário',
    bornDate DATE NOT NULL COMMENT 'Data de inicio',
    salary decimal(15,6) DEFAULT '0' COMMENT 'Salario do usuario',
    position VARCHAR (255) NOT NULL COMMENT 'Posição na empresa',
    PRIMARY KEY (id)
) CHARSET = utf8;
