INSERT INTO recetas (name_receta, procces_receta, porciones_receta) VALUES
  ('lasagna', 'horneado', 6),
  ('carrillera', 'escalfar', 6),
  ('torta de espinacas', 'horneado', 6);

INSERT INTO ingredientes (name_ingrediente, amount_ingrediente) VALUES
('queso parmesano', 20 ),
('tomate', 100),
('carne picada', 500),
('laminas lasaña', 50),
('espinacas', 300),
('huevos', 50),
('bechamel', 100),
('harina', 100),
('carrillera', 400),
('vino blanco', 40),
('vino tinto', 40),
('zanahoria', 50),
('cebolla', 50),
('aceite de oliva', 20),
('queso havarti', 40),
('pollo', 600);

INSERT INTO receta_ingrediente(receta_id, ingrediente_id) VALUES
('1', '1'),
('1', '2'),
('1', '3'),
('1', '4'),
('1', '7'),
('1', '10'),
('1', '12'),
('1', '13'),
('1', '15'),
('2', '9'),
('2', '8'),
('2', '11'),
('2', '12'),
('2', '13'),
('2', '14'),
('3', '16'),
('3', '5'),
('3', '6'),
('3', '15'),
('3', '13');



-- INSERT INTO receta_ingrediente(receta_id, ingrediente_id) VALUES
-- (SELECT
--  recetas.receta_id,
--  ingredientes.ingrediente_id,
--   FROM receta_ingrediente
--   INNER JOIN recetas ON receta_ingrediente.receta_id = recetas.receta_id 
--   INNER JOIN ingredientes ON receta_ingrediente.ingrediente_id = ingredientes.ingrediente_id);

;