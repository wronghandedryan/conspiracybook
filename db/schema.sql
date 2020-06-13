### Schema
DROP DATABASE IF EXISTS conspbook_db;
CREATE DATABASE conspbook_db;
CREATE TABLE Users (
	id BIGINT (20),
	firstName VARCHAR (50),
	lastName VARCHAR (50),
	email VARCHAR (50),
	passwordHash VARCHAR (255),
	registeredAt DATETIME,
	lastLogin DATETIME,
	intro TINYTEXT,
	profile TEXT,
	PRIMATY KEY (id)
);
CREATE TABLE Sponsers id BIGINT (20),
sponserName varchar(225),
sponserType varchar(255),
email VARCHAR (50),
passwordvarchar(255),
messageTxt TEXT,
createdAt DATETIME,
);
CREATE TABLE Posts (
	id BIGINT (20),
	authorId BIGINT (20),
	parentId BIGINT (20),
	title VARCHAR (75),
	metaTitle VARCHAR (100),
	slug VARCHAR (100),
	summary TINYTEXT,
	published TINYINT (1),
	createdAt DATETIME,
	updatedAt DATETIME,
	publishedAt DATETIME,
	content TEXT,
	PRIMARY KEY (id)
);