DROP DATABASE IF EXISTS images; 
-- if a images database exists, drop it so we can start from scratch

CREATE DATABASE images;
USE images;

-- title: string
-- explanation: string
-- url: string
-- date: string
CREATE TABLE images (
  id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  title VARCHAR(255),
  explanation TEXT,
  url VARCHAR(255),
  date VARCHAR(255)
);