import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="PlaySong">PlaySong</Link>
          </li>
          <li>
            <Link to="ListDogs">ListDogs</Link>
          </li>
          <li>
            <Link to="LineaBoton"> Linea Boton </Link>
          </li>
          <li>
            <Link to="TestComponent"> Test Component </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
