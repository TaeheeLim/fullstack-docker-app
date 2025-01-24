DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);

ALTER TABLE lists CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

