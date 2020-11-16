import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Bienvenidos</h1>
      <h2>¿Que Quieres Comer Hoy?</h2>
      <p>Escoge Tus Ingredientes</p>
      <Link to="/ingredientes">
        <button>Ingredientes</button>
      </Link>
      <p>O si quieres ver las recetas del recetario...</p>
      <Link to="/recetas">
        <button>Recetas</button>
      </Link>
      <p>O quieres crear una receta nueva...</p>
      <Link to="/recetas/new">
        <button>Nueva receta</button>
      </Link>
      <p>O quieres crear un ingrediente nuevo...</p>
      <Link to="/ingredientes/new">
        <button>Nuevo ingrediente</button>
      </Link>
    </>
  );
}

export default Home