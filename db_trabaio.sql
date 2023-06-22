create database trabaio;

use trabaio;

create table login(
id int primary key auto_increment,
nome varchar(120) not null,
senha varchar(10) not null
);
select * from login;

CREATE TABLE sorteio (
  id INT NOT NULL AUTO_INCREMENT,
  numero INT NOT NULL,
  PRIMARY KEY (id)
);

