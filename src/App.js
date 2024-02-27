import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap/';
import React, {useState,useEffect} from 'react';
import {UserProvider} from './Components/Helpers';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import {ListAll} from './Components/Helpers';
import {GetDog} from './Components/Helpers';

import CountryCapitalGame from './Components/CountryCapitalGame';
import FlexObjectScreen from './Components/FlexObjectScreen';
import ListaProductos from './Components/ListaProductos';
import CarritoCompra from './Components/CarritoCompra';
import RGrid from './Components/RGrid';
import ListaTareas from './Components/ListaTareas';
import Login from './Components/Login';
import Card from './Components/Card';
import GrillaCompleta from './Components/GrillaCompleta';
import ModalForm from './Components/ModalForm';
import TestUsers from './Components/TestUsers';
import PlaySong from './Components/PlaySong';
import CitizenExam from './Components/CitizenExam';


function App() {
  const [Dogs, setDogs] = useState([]);
  const [isCargando, setIsCargando] = useState(false);
  const [DogId,setDogId] = useState(0);
  const [Dog,setDog] = useState();
  const [modalEdit, setModalEdit] = useState(false); // Para el popup de ModalForm
  const [User, setUser] = useState(".");


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
    <>

    <div> 
      <ModalForm show={modalEdit} onHide={() => CloseModalForm()} />
    </div>

    <Router>

      <div>
        <ul >

          <li key="Login"  > 
            <Link to="/Login">Login</Link>
          </li>

          <li key="GrillaCompleta" >
            <Link to="/GrillaCompletaPrueba"> Grilla Completa Dog Test </Link>
          </li>

          <li key="Grilla" >
            <Link to="/RGrilla">RGrilla</Link>
          </li>

          <li key="CountryCapitalGame" >
            <Link to="/CountryCapitalGame">CountryCapitalGame</Link>
          </li>

          <li key="FlexObjectScreen" >
            <Link to="/FlexObjectScreen">FlexObjectScreen</Link>
          </li>

          <li key="ListaProductos" >
            <Link to="/ListaProductos">ListaProductos</Link>
          </li>

          <li key="ListaTareas" >
             <Link to="/ListaTareas"> Lista de Tareas</Link> 
          </li>

          <li>
            <Link to="/PopUpForm"> Pop up Form </Link>
          </li>

          <li>
            <Link to="/TestUsers"> Test Users </Link>
          </li>

          <li>
            <Link to="/PlaySong"> PlaySong </Link> 
          </li>

          <li>
            <Link to="/CitizenExam"> Citizen Exam </Link> 
          </li>
          
        </ul>

        <Switch>

          <Route path="/Login">

          <UserProvider value={User}>
            <Login></Login>
          </UserProvider>

          </Route>

          <Route path="/rGrilla">

            <button key="btnFindTest" id="btnFindTest" onClick={FindDogs}>
              Ver Perros Test
            </button>
            <br></br>
            <RGrid
              key="RGrid"
              Tittle="Grilla Dogs Test"
              rows={Dogs}
              columns={GrillaConfiguracion}
              ShowDelete="true"
              Export="true"
              DeleteId={id => console.log(id)}
              isLoading={isCargando}
              ConfigurationId="id"
            />

          </Route>

          <Route path="/GrillaCompletaPrueba">
            <GrillaCompleta></GrillaCompleta>
          </Route>

          <Route path="/ListaProductos">
         
            <table>
              <tr>
                <td>
                    <ListaProductos key="lProductos" SelectId={id => setDogId(id)} > </ListaProductos>
                </td>
                <td>
                   <Card key="Card" dog={Dog} href="#"></Card>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                    <CarritoCompra DogId={DogId} ></CarritoCompra>
                </td>
              </tr>
            </table>

          </Route>

          <Route path="/CountryCapitalGame">
            <h2>Capital Game</h2>
            <CountryCapitalGame data={{Germany: 'Berlin', Azerbaijan: 'Baku'}}></CountryCapitalGame>
          </Route>

          <Route path="/FlexObjectScreen">
            <h2>FlexObjectScreen</h2>
            <FlexObjectScreen></FlexObjectScreen>
          </Route>

        <Route path="/ListaTareas" >
            <h2> Lista de Tareas </h2>
            <ListaTareas></ListaTareas>
        </Route>

        <Route path="/PopUpForm">
            <h2> Show Popup Form </h2>
            <Button onClick={() => OpenModalForm()}> Show </Button>
        </Route>

        <Route path="/TestUsers">
            <h2> Test Users </h2>
            <TestUsers></TestUsers>
        </Route>

        <Route path="/PlaySong">
            <h2> PlaySong </h2>
            <PlaySong></PlaySong>
        </Route>

        <Route path="/CitizenExam">
            <CitizenExam></CitizenExam>
        </Route>

        </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;
