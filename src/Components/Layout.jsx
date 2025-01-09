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
            <Link to="EditDog">EditDog</Link>
          </li>
          <li>
            <Link to="Upload"> Upload </Link>
          </li>
          <li>
            <Link to="UploadCompress" > Upload Compress </Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
