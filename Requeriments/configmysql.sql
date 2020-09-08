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