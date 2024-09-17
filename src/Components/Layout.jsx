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
            
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
