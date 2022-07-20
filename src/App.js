import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {ListAll} from './Components/Helpers';
import React, {useState,useEffect} from 'react';
import CountryCapitalGame from './Components/CountryCapitalGame';
import Saludar from './Components/Saludar';
import FlexObjectScreen from './Components/FlexObjectScreen';
import ListaProductos from './Components/ListaProductos';
import CarritoCompra from './Components/CarritoCompra';
import RGrid from './Components/RGrid';


function App() {
  const [Dogs, setDogs] = useState([]);
  const [isCargando, setIsCargando] = useState(false);

  function FindDogs() {
    setIsCargando(true);

    ListAll().then(lDog => {
      setDogs(lDog);
      setIsCargando(false);
    });
  }
  
  useEffect(() => {

    ListAll().then(lDog => {
      setDogs(lDog);
    });

  }, []);
  

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

    <Router>

      <div>
        <ul >

          <li key="home"  > 
            <Link to="/">Home</Link>
          </li>

          <li key="Saludar" >
            <Link to="/Saludar">Saludar</Link>
          </li>

          <li key="GrillaCompleta" >
            <Link to="/GrillaCompletaPrueba"> Grilla Completa Dog Test </Link>
          </li>

          <li key="Grilla" >
            <Link to="/RGrilla">RGrilla</Link>
          </li>

          <li key="Reducer Test" >
            <Link to="/TestSocialReducer">TestSocialReducer</Link>
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

        </ul>


<Saludar></Saludar>




        <Switch>

          <Route path="/Home">
            
          </Route>

          <Route path="/Saludar">
            <h3>Prueba Saludar</h3>
            <Saludar nombre="Ale" edad="20"></Saludar>
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
                  <ListaProductos></ListaProductos>
                </td>
                <td>
                    <CarritoCompra ></CarritoCompra>
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

        </Switch>
      </div>
    </Router>

    </>
  );
}

export default App;
