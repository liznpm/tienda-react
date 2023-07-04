import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import dosImage from '../images/Ropa.jpg';
import tresImage from '../images/Gorros.jpg';
import cuatroImage from '../images/Relojes.jpg';
import cincoImage from '../images/zapatos.jpg';
import seisImage from '../images/bolsos.jpg';
import sieteImage from '../images/Abrigos.jpg';

const Product = () => {
  const [likes, setLikes] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  const handleImageClick = (event) => {
    event.target.classList.add("image-animation");
    setTimeout(() => {
      event.target.classList.remove("image-animation");
    }, 1000);
  };

  return (

   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "white" }}>
    <div>
      <h1 className="card-title"> Te puede interesar</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={dosImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Saco</h5>
                <p className="card-text">
                  El saco con diseño clásico y elegante, perfecto para ocasiones formales o para añadir un toque sofisticado a cualquier conjunto.
                </p>
                <p className="card-text">
                  250 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={tresImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Gorro</h5>
                <p className="card-text">
               Este azul es la opción perfecta para mantenerte abrigado y a la moda durante los meses de invierno. 

                </p>
                <p className="card-text">
                  210 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={cuatroImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Reloj</h5>
                <p className="card-text">
                Este reloj es un elegante accesorio que combina estilo y funcionalidad para cualquier ocasion.
                </p>
                <p className="card-text">
                  120 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={cincoImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Tacones</h5>
                <p className="card-text">
                Estos zapatos rojos son una elección vibrante y llamativa para completar tu look.
                </p>
                <p className="card-text">
                  250 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={seisImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Bolso</h5>
                <p className="card-text">
                Este bolso rojo es una opción elegante y sofisticada para complementar tu estilo.
                </p>
                <p className="card-text">
                  300 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card-bg">
              <div className="card-body">
                <img src={sieteImage} style={{ width: "400px", height: "300px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                <h5 className="card-title">Abrigo</h5>
                <p className="card-text">
                Este abrigo es una prenda imprescindible para mantener el estilo y la comodidad durante los días fríos.
                </p>
                <p className="card-text">
                  170 USD
                </p>
                <p className="card-text text-success">
                  Envío gratis
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary text-info" onClick={handleLikeClick}>
                    <FaHeart className="rounded-circle" /> ({likes})
                  </button>
                  <a href="#" className="btn btn-link text-dark text-decoration-none">
                    Observar
                  </a>
                  <button className="btn btn-success" onClick={() => handleBuyClick("Gorros")}>
                    <FaShoppingCart className="rounded-circle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
