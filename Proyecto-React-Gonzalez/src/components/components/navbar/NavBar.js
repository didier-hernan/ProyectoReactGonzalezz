import React from 'react';
import './estilos.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mi E-Commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => { /* Acción para producto 1 */ }}>Categoría 1</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => { /* Acción para producto 2 */ }}>Categoría 2</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => { /* Acción para la producto 3 */ }}>Categoría 3</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => { /* Acción para la producto 4 */ }}>Categoría 4</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => { /* Acción para la producto 5 */ }}>Categoría 5</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
      

export default Navbar;