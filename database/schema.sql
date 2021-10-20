DROP DATABASE IF EXISTS nasa;

CREATE DATABASE nasa;

USE nasa;

-- 2021-10-20
CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date varchar(25) NOT NULL,
  explanation varchar(255) NOT NULL,
  hdurl varchar(100) NOT NULL
);