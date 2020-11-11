DROP TABLE recetas IF EXISTS;
DROP TABLE ingredientes IF EXISTS;


CREATE TABLE recetas (
  receta_id serial PRIMARY KEY,
  name_receta    text NOT NULL,
  procces_receta VARCHAR (255),
  porciones_receta INT,
);

CREATE TABLE ingredientes (
  ingrediente_id  serial PRIMARY KEY, 
  name_ingrediente     text NOT NULL,
  amount_ingrediente VARCHAR (255) NOT NULL
);

CREATE TABLE receta_ingrediente (
  receta_id int NOT NULL,
  ingrediente_id int NOT NULL,
  PRIMARY KEY (receta_id, ingrediente_id),
  FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(ingrediente_id) ON UPDATE CASCADE,
  FOREIGN KEY (receta_id) REFERENCES recetas(receta_id) ON UPDATE CASCADE
);