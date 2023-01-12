import React from "react";
import CartWidget from "./CartWidget";
import iconobd from '../../assets/img/brand/iconobd.png';
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src={iconobd} alt="iconobd" style={{ height:'120px'}}></img></Link>        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link active" aria-current="page">
              <NavLink to="/#">Home</NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink to="/#">Contacto</NavLink>
            </li>
            <li className="nav-item dropdown nav-link dropdown-toggle" >
              <NavLink to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item">
                  <NavLink to="/categoria/bancos">Bancos</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/categoria/mesas">Mesas</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to= "/categoria/sillas">Sillas</NavLink>            
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>          
        </div>
      </div>
      <div>
        <CartWidget/>
        <span>2</span>
      </div>
    </nav>  
  );
};

export default NavBar;
