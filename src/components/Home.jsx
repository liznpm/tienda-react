import React from 'react';
import unoImage from '../images/7.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap

const Home = () => {
  return (
    <div className="card">
      <img src={unoImage} className="card-img" alt="Image" /> {/* Utiliza el elemento <img> para mostrar la imagen */}
      <div className="card-img-overlay d-flex flex-column align-items-start">
        <h1 className="card-title text-white mt-15"> {/* Cambia el tamaño de la fuente a h2 y agrega mt-5 para mover el título hacia abajo */}
       Siempre a la moda
        </h1>
        <p className="card-text text-white">
          Articulos unicos
        </p>
        <div className="text-left mt-10"> {/* Agrega mt-3 para mover el botón hacia abajo */}
        </div>
      </div>
    </div>
  );
}

export default Home;