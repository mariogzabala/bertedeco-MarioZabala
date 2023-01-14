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
            <li >
              <NavLink to="/#" className="nav-item nav-link active" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/#" className="nav-item nav-link">Contacto</NavLink>
            </li>
            <li className="nav-item dropdown" >
              <NavLink to="/" className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="/categoria/bancos" className="dropdown-item">Bancos</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/mesas" className="dropdown-item"> Mesas</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/sillas" className="dropdown-item">Sillas</NavLink>            
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
      <div className="cart">
        <Link to= "/carrito"><CartWidget/></Link>
        <span>2</span>
      </div>
    </nav>  
  );
};

export default NavBar;
