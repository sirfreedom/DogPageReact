import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RGridTest from './Components/RGridTest';
import {ListAll} from './Components/Helpers';
import React, {useState} from 'react';
import TestSocialReducer from './Components/TestSocialReducer';

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

  /*
  useEffect(() => {

  }, []);
  */

  function Topics() {
    return (
      <div>
        <h2>Topic</h2>
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
      ColumnOrdenable: 'breed_group',
    },
  ];

  return (
    <Router>
      <div>
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="GrillaCompleta">
            <Link to="/GrillaCompletaPrueba"> Grilla Completa Dog Test </Link>
          </li>
          <li key="Topic">
            <Link to="/topics">Topics</Link>
          </li>
          <li key="GrillaTest">
            <Link to="/RGrillaTest">RGrillaTest</Link>
          </li>
          <li key="Reducer Test">
            <Link to="/TestSocialReducer">TestSocialReducer</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/rGrillaTest">
            <button key="btnFindTest" id="btnFindTest" onClick={FindDogs}>
              Ver Perros Test
            </button>
            <br></br>
            <RGridTest
              key="RGridTest"
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
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/TestSocialReducer">
            <TestSocialReducer></TestSocialReducer>
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
