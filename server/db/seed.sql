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
  ('carrillera al vino tinto.', 'En primer lugar, sellamos la carne para que los jugos queden en su interior.
Primero, con un cuchillo, eliminamos las grasas que puedan tener las carrilleras, y las salpimentamos por todas sus partes. Después, ponemos en una sartén amplia un chorrito de aceite. Lo calentamos a fuego fuerte. Cuando esté caliente, ponemos las carrilleras y las cocinamos durante alrededor de 2-3 minutos por cada lado. Cuando estén doradas las reservamos en un plato.
Empezamos a hacer la salsa al vino tinto con un sofrito de verduras.
Después, en la misma sartén, a fuego medio, ponemos otro chorrete de aceite. Cuando esté caliente, añadimos el ajo, la zanahoria, y la cebolla, todo ello bien picado. Lo salpimentamos y dejamos que se cocine durante unos 12 minutos, removiendo de vez en cuando. 
Ahora vamos a añadir el caldo de carne y lo más importante: el vino tinto
Pasado este tiempo, añadimos 1 vaso del vino tinto, el caldo de carne y la cucharadita de tomillo. Volvemos a remover para integrar todos los ingredientes. Corregimos de sal y de pimienta.
Toca añadir las carrilleras y cocinarlas durante un buen rato
A continuación, añadimos las carrilleras y tapamos. Dejamos que se cocinen durante unas 3 horas manteniendo siempre el fuego medio. Removemos de vez en cuando para que se integren bien los sabores y añadimos más vino cuando la salsa se empiece a secar.
Trituramos la salsa de nuestras carrilleras de cerdo en salsa de vino tinto
Pasado ese tiempo, retiramos a un plato las carrilleras y pasamos la salsa a un baso batidor. La trituramos hasta que quede bien fina. Si queda demasiado densa -como una crema- añade un poco más de vino o de caldo. Si queda demasiado caldosa -como una sopa- deja que se cocine unos minutos más.
Finalmente devolvemos la salsa a la sartén y terminamos el plato
Para terminar, devolvemos la salsa a la sartén junto con las carrilleras y lo calentamos de nuevo a fuego medio. Corregimos de sal y de pimienta y dejamos que se impregnen bien en la salsa. Finalmente, servimos este delicioso plato acompañado de una guarnición de patatas o de una buena ensalada.
', 6),
  ('torta de espinacas', '
    Descongelar la espinaca o cocinarla 10 minutos en agua y poca sal. Colar retirando todo el líquido.
    Picar los ingrediente para el hogao (sofrito).
    En una sartén con poco aceite, poner la cebolla larga (en rama, scallions) con sal, pimienta y comino, dejar hasta que la cebolla esté transparente.
    Agregar el tomate y el ajo, poner un poco más de condimento si necesita.
    Dejar cocinar a fuego medio hasta que el tomate esté blando, retirar y reservar.
    En un recipiente poner la espinaca escurrida, agregar el hogao, mezclar.
    Añadir la mantequilla derretida a temperatura ambiente, revolver y condimentos al gusto.
    Batir los huevos con la leche y un poco de sal y pimienta, añadirlos a la mezcla.
    Agregar la harina y revolver de manera que no queden grumos.
    La mezcla debe quedar de una espesa y firme, no líquida, si hace falta poner más harina.
    En una sartén a fuego medio bajo derretir una cucharada de mantequilla y dar vuelta al sartén para que queden impregnadas las paredes.
    Se espolvorea con poca harina.
    Con una brocha se revuelven un poco los dos ingredientes, poner el fuego en bajo.
    Incorporar la mezcla.
    Tapar y dejar cocinar por 25 minutos o hasta que la torta esté bien cuajada.
    Dejar enfriar unos 10 minutos antes de cortar las porciones. Si por algún motivo no despega, no es necesario desmoldar.
', 6);


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
