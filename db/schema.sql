### Schema

CREATE DATABASE cospbook_db;
USE conspbook_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	user BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
