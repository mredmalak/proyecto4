INSERT INTO recetas (name_receta, procces_receta, porciones_receta) VALUES
  ('lasagna', 'horneado', 6),
  ('carrillera', 'escalfar', 6),
  ('torta de espinacas', 'horneado', 6);


INSERT INTO ingredientes (name_ingrediente) VALUES
('queso parmesano'),
('tomate frito'),
('carne picada'),
('laminas lasaña'),
('espinacas'),
('huevos'),
('bechamel'),
('harina'),
('carrillera'),
('vino blanco'),
('vino tinto'),
('zanahoria'),
('cebolla'),
('aceite de oliva'),
('queso havarti'),
('pollo');

INSERT INTO receta_ingrediente(receta_id, ingrediente_id, amount_ingrediente) VALUES
('1', '1', '120g'),
('1', '2', '400ml'),
('1', '3', '500g'),
('1', '4', '12uds'),
('1', '7', '1800ml'),
('1', '10', '100ml'),
('1', '12', '2uds'),
('1', '13', '1ud'),
('1', '15', '18 lonchas'),
('2', '9', '12 uds'),
('2', '8', '50g'),
('2', '11', '100ml'),
('2', '12', '12uds'),
('2', '13', '12uds'),
('2', '14', '100ml'),
('3', '16','900g'),
('3', '5', '300g'),
('3', '6', '12uds'),
('3', '15', '6 lonchas'),
('3', '13', '4uds');



-- INSERT INTO receta_ingrediente(receta_id, ingrediente_id) VALUES
-- (SELECT
--  recetas.receta_id,
--  ingredientes.ingrediente_id,
--   FROM receta_ingrediente
--   INNER JOIN recetas ON receta_ingrediente.receta_id = recetas.receta_id 
--   INNER JOIN ingredientes ON receta_ingrediente.ingrediente_id = ingredientes.ingrediente_id);

;
