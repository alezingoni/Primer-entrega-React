import React from 'react';
import logo from '../imagen/logo.jpn.png';
import CartWidget from './CartWidget.js';



 function NavBar() {
    return (
      <header className="App-header">
        <div className='Logo'>
          <img src={logo} className='LogoImg'></img>
        </div>
        <div className='Botonera'>
          <ul className="paginas">
            <li className="nav-item">
              <a aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a aria-current="page" href="#">Celulares</a>
            </li>
            <li className="nav-item">
              <a aria-current="page" href="#">Gaming</a>
            </li>
            <li className="nav-item">
              <a aria-current="page" href="#">contacto</a>
            </li>
          </ul>
        </div>
        <div className='carrodeCompras'>
          <CartWidget/>
        </div>
      </header>
    )
  }
  
  export default NavBar;