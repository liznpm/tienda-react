import React, { useState } from 'react';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleOptionClick = () => {
    setSearchActive(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-body mb-4">
      <a className="navbar-brand fw-bold fs-4" href="#">Eshop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item active" onClick={handleOptionClick}>
            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active" onClick={handleOptionClick}>
            <a className="nav-link" href="#">Productos </a>
          </li>
          <li className="nav-item active" onClick={handleOptionClick}>
            <a className="nav-link" href="#">Informacion </a>
          </li>
          <li className="nav-item active" onClick={handleOptionClick}>
            <a className="nav-link" href="#">About </a>
          </li>
          <li className="nav-item active" onClick={handleOptionClick}>
            <a className="nav-link" href="#">Contact </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className={`btn btn-outline-success ${searchActive ? 'btn-interact' : ''}`} type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
