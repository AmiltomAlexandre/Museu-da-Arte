create database cadastroArtes;
use cadastroArtes;

create table cadastro(
idAutor int primary key AUTO_INCREMENT not null,
nomeLivro varchar(255) not null,
nomeAutor varchar(255) not null,
numeroPaginas int not null,
urlImagem varchar(200) not null
);

insert into cadastro values
(null,'A Saga Wingfeather: nos Limites do mar Sombrio da Escuridão', 'Andrew Peterson', 304 , 'https://images-na.ssl-images-amazon.com/images/I/81mfukyzJJS.jpg'),
(null,'STAR WARS: DARK EDITION: Edição épica para uma saga eterna!', 'Por GEORGE LUCAS, DONALD F. GLUT, e outros.', 528 , 'https://images-na.ssl-images-amazon.com/images/I/71sf+k7nCQL.jpg'),
(null,'Neuromancer: 1', 'Por William Gibson', 320 , 'https://images-na.ssl-images-amazon.com/images/I/91Bx5ilP+EL.jpg');

select * from cadastro;