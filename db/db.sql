CREATE DATABASE calcu;

-- DB Para las vistas de la App --
CREATE TABLE vistas (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) UNIQUE NOT NULL,
    type VARCHAR(20) NOT NULL,
    placeholder VARCHAR(60),
    label VARCHAR(60),
);

-- DB Para los datos ingresados por el ususario --
CREATE TABLE scopeOne (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    gas INT(20), 
    nafta INT(20), 
    created_at timestamp NOT NULL DEFAULT current_timestamp,
);
