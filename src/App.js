import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import PlaySong from "./Components/PlaySong";
import Home from "./Components/Home";
import LineaBoton from "./Components/LineaBoton";
import NoPage from "./Components/NoPage";

function App() {

 return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PlaySong" element={<PlaySong />} />
          <Route path="LineaBoton" element={<LineaBoton />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
