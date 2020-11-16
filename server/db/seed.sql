INSERT INTO recetas (name_receta, procces_receta, porciones_receta) VALUES
  ('lasagna', 'Dejar las placas de lasaña en remojo con agua caliente. 
Cortar muy fino la cebolla y la zanahoria y dorar en el aceite de oliva. 
Añadir la carne picada y especiar (cayena en polvo, pimienta, ajo en polvo...). 
Cuando la carne esté dorada pero sin terminar de cocinar añadir un chorrito de vino blanco y dejar evaporar. 
Añadir el tomate frito o salsa de tomate. Dejar a fuego medio hasta que la carne esté bien cocinada y blandita. 
Bechamel: dependiendo cuanto nos guste la bechamel haremos más o menos, pero lo importante es que haya la misma cantidad de mantequilla y de harina (en mi caso 70gr de cada). Poner la mantequilla en la sartén y cuando está derretido añadir la harina. Remover bien unos segundos para que se tueste un poco la harina. A partir de aquí viene lo laborioso, empezar a echar leche muy poco a poco mientras vamos removiendo (paciencia). Al final añadir la nuez moscada. 
Montar la lasaña: “manchar” la fuente para el horno con un poco de la salsa o bien untarla con mantequilla. Después poner las capas: pasta / carne / bechamel / pasta / carne / bechamel / pasta / bechamel / queso rallado.
Hornear a unos 180C con el grill. La carne ya está cocinada de antes y la pasta en remojo ya estará bastante blanda, así que en el horno solo necesita estar tiempo suficiente para que el queso se gratine.
', 6),
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
