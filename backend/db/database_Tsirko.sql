

CREATE TABLE IF NOT EXISTS USUARIO (
    cpf BIGINT(11) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    tipoUsuario VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL, 
    dataDeNascimento DATETIME NOT NULL,

    CONSTRAINT USUARIO_PK PRIMARY KEY (cpf)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS GERENTE (
    idGerente INT(5) AUTO_INCREMENT NOT NULL,
    cpf BIGINT(11) NOT NULL,

    CONSTRAINT GERENTE_PK PRIMARY KEY (idGerente),
    CONSTRAINT GERENTE_USUARIO_FK FOREIGN KEY (cpf) REFERENCES USUARIO (cpf) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS ESPECTADOR (
    idEspectador INT(5) AUTO_INCREMENT NOT NULL,
    cpf BIGINT(11) NOT NULL,

    CONSTRAINT ESPECTADOR_PK PRIMARY KEY (idEspectador),
    CONSTRAINT ESPECTADOR_USUARIO_FK FOREIGN KEY (cpf) REFERENCES USUARIO (cpf) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS CIRCO (
    cnpj BIGINT(20) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    idGerente INT(5) AUTO_INCREMENT NOT NULL,

    CONSTRAINT CIRCO_PK PRIMARY KEY (cnpj),
    CONSTRAINT CIRCO_GERENTE_FK FOREIGN KEY (idGerente) REFERENCES GERENTE (idGerente) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS ARTISTA (
    cpf BIGINT(11) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    
    cnpj BIGINT(20) NOT NULL,

    CONSTRAINT ARTISTA_PK PRIMARY KEY (cpf),
    CONSTRAINT ARTISTA_CIRCO_FK FOREIGN KEY (cnpj) REFERENCES CIRCO (cnpj) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS AVALIACAO (
    idAvaliacao INT(5) AUTO_INCREMENT NOT NULL,
   
    comentario VARCHAR(100) NOT NULL,
   
    nota INT(2) NOT NULL,
    
    
    idEspectador INT(5) AUTO_INCREMENT NOT NULL,
    

    CONSTRAINT AVALIACAO_PK PRIMARY KEY (idAvaliacao),
    CONSTRAINT AVALIACAO_ESPECTADOR_FK FOREIGN KEY (idEspectador) REFERENCES ESPECTADOR (idEspectador) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;


CREATE TABLE IF NOT EXISTS ESPETACULO (
    idEspetaculo INT(5) AUTO_INCREMENT NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero INT(5) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep INT(8) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    horario TIME NOT NULL,
    dataEspetaculo DATETIME NOT NULL,
    cnpj BIGINT(20) NOT NULL,
    idAvaliacao INT(5) AUTO_INCREMENT NOT NULL,
    

    CONSTRAINT ESPETACULO_PK PRIMARY KEY (idEspetaculo),
    CONSTRAINT ESPETACULO_CIRCO_FK FOREIGN KEY (cnpj) REFERENCES CIRCO (cnpj) ON DELETE CASCADE, 
    CONSTRAINT ESPETACULO_AVALIACAO_FK FOREIGN KEY (idAvaliacao) REFERENCES AVALIACAO (idAvaliacao) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS gerencia (
	idGerente INT(5) AUTO_INCREMENT NOT NULL,
    cnpj BIGINT(20) NOT NULL,
    

    CONSTRAINT gerencia_GERENTE_FK FOREIGN KEY (idGerente) REFERENCES GERENTE (idGerente) ON DELETE CASCADE,
    CONSTRAINT gerencia_CIRCO_FK FOREIGN KEY (cnpj) REFERENCES CIRCO (cnpj) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS contrata (
	cpf BIGINT(11) NOT NULL,
    cnpj BIGINT(20) NOT NULL,
    

    CONSTRAINT gerencia_ARTISTA_FK FOREIGN KEY (cpf) REFERENCES ARTISTA (cpf) ON DELETE CASCADE,
    CONSTRAINT gerencia_CIRCO_FK FOREIGN KEY (cnpj) REFERENCES CIRCO (cnpj) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS promove (
	idEspetaculo INT(5) AUTO_INCREMENT NOT NULL,
    cnpj BIGINT(20) NOT NULL,
    

    CONSTRAINT gerencia_ESPETACULO_FK FOREIGN KEY (idEspetaculo) REFERENCES ESPETACULO (idEspetaculo) ON DELETE CASCADE,
    CONSTRAINT gerencia_CIRCO_FK FOREIGN KEY (cnpj) REFERENCES CIRCO (cnpj) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS avalia (
	idEspetaculo INT(5) AUTO_INCREMENT NOT NULL,
	idAvaliacao INT(5) AUTO_INCREMENT NOT NULL,
    

    CONSTRAINT gerencia_ESPETACULO_FK FOREIGN KEY (idEspetaculo) REFERENCES ESPETACULO (idEspetaculo) ON DELETE CASCADE,
    CONSTRAINT gerencia_AVALIACAO_FK FOREIGN KEY (idAvaliacao) REFERENCES AVALIACAO (idAvaliacao) ON DELETE CASCADE
) ENGINE = InnoDB;


