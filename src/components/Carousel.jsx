import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import dosImage from '../images/Hogar1.jpg';
import tresImage from '../images/Estilo.jpg';
import cuatroImage from '../images/Binoculares.jpg';

const Product = () => {
  const handleImageClick = (event) => {
    event.target.classList.add("image-animation");
    setTimeout(() => {
      event.target.classList.remove("image-animation");
    }, 1000);
  };

  return (
      <div className="me-5 d-none d-lg-block">
        <h1 className="card-title">Descubre</h1>
        <Carousel>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={tresImage} style={{ width: "600px", height: "400px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />                 
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <h5 className="card-title">El estilo que estabas buscando, distraete mirando precio y eligiendo lo que quieras</h5>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={cuatroImage} style={{ width: "600px", height: "400px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <h5 className="card-title">Encuentra los objetos que siempre haz estado buscando</h5>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={dosImage} style={{ width: "600px", height: "400px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <h5 className="card-title">Todo lo que buscas y necesita para tu hogar</h5>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default Product;
