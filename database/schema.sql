DROP DATABASE IF EXISTS nasa;

CREATE DATABASE nasa;

USE nasa;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  date varchar(50) NOT NULL,
  explanation varchar(255) NOT NULL,
  url varchar(100) NOT NULL,
  title varchar(255) NOT NULL,
  PRIMARY KEY (id)
);