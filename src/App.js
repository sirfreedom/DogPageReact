import './Css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap/'
import React, {useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {ListAll} from './Components/Helpers'
import {GetDog} from './Components/Helpers'

import CountryCapitalGame from './Components/CountryCapitalGame'
import FlexObjectScreen from './Components/FlexObjectScreen'
import ListaProductos from './Components/ListaProductos'
import CarritoCompra from './Components/CarritoCompra'
import RGrid from './Components/RGrid'
import ListaTareas from './Components/ListaTareas'
import Login from './Components/Login'
import Card from './Components/Card'
import GrillaCompleta from './Components/GrillaCompleta'
import ModalForm from './Components/ModalForm'
import PlaySong from './Components/PlaySong'
import UploadFile from './Components/UploadFile'

function App() {
  const [Dogs, setDogs] = useState([]);
  const [isCargando, setIsCargando] = useState(false);
  const [DogId,setDogId] = useState(0);
  const [Dog,setDog] = useState();
  const [modalEdit, setModalEdit] = useState(false); // Para el popup de ModalForm


const FindDogs = () => {
    setIsCargando(true);
    ListAll().then(lDog => {
      setDogs(lDog);
      setIsCargando(false);
    });
  }
  

  const OpenModalForm = () => {
  //...
    setModalEdit(true);
  };

  const CloseModalForm = () => 
  {
    //...
    setModalEdit(false);
  }


 useEffect(() => {
    ListAll().then(lDog => {
      setDogs(lDog);
    });
  }, []);

  useEffect(() => {
  GetDog(DogId).then(oDog => {
    setDog(oDog);
  });

  }, [DogId]);


  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  const GrillaConfiguracion = [
    {
      Tittle: 'Id',
      Selector: fila => fila.id,
      WidthColumn: '30%',
    },
    {
      Tittle: 'Nombre',
      Selector: fila => fila.name,
      WidthColumn: '30%',
      Ordenable: true,
      ColumnOrdenable: 'name',
    },
    {
      Tittle: 'Tamaño',
      Selector: fila => fila.breed_group,
      WidthColumn: '30%',
      Ordenable: true,
      ColumnOrdenable: 'breed_group'
    }
  ];


  return (
    <div>

    <div> 
      <ModalForm show={modalEdit} onHide={() => CloseModalForm()} />
    </div>

    




      <Router>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </Router>



    </div>
  );
}

export default App;
