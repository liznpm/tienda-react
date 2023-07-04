import React, { useState } from "react";
import { FaLaptop, FaBook, FaVestPatches, FaGlasses, FaCamera, FaHome } from "react-icons/fa";

const Product = () => {
  const handleImageClick = (event) => {
    event.target.classList.add("image-animation");
    setTimeout(() => {
      event.target.classList.remove("image-animation");
    }, 1000);
  };

  return (
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "lightgray" }}>
      <div className="me-5 d-none d-lg-block">
        <div>
          <h1 className="card-title">Articulos Populares</h1>

          <div className="row">
            <div className="col-sm-2">
              <div className="card custom-card-bg">
                <div className="card-body">
                  <FaLaptop
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Ropa</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card custom-card-bg" >
                <div className="card-body">
                  <FaBook
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Libros</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card custom-card-bg">
                <div className="card-body">
                  <FaVestPatches
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Parches</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card custom-card-bg" >
                <div className="card-body">
                  <FaGlasses
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Gafas</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card custom-card-bg" >
                <div className="card-body">
                  <FaCamera
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Cámaras</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card custom-card-bg" >
                <div className="card-body">
                  <FaHome
                    style={{ width: "250px", height: "200px" }}
                    onClick={handleImageClick}
                  />
                  <h5 className="card-title">Hogar</h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
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
