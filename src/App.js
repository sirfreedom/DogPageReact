import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RGrid from './Components/RGrid';
import {ListAll} from './Components/Helpers';
import React, {useState} from 'react';

function App() {
  const [Dogs, setDogs] = useState([]);
  const [isCargando, setIsCargando] = useState(false);

  function FindDogs() {
    setIsCargando(true);
    ListAll().then(lDog => {
      setDogs(lDog);
      setIsCargando(false);
      console.log(lDog);
    });
  }

  /*
  useEffect(() => {

  }, []);
  */

  function Topics() {
    //let match = useRouteMatch();
    return <h2>Topic</h2>;
  }

  const GrillaConfiguracion = [
    {
      Titulo: 'Nombre',
      Selector: fila => fila.name,
      WidthColumn: '30%',
      Ordenable: true
    },
    {
      Titulo: 'Tamaño',
      Selector: fila => fila.breed_group,
      WidthColumn: '30%',
    },
  ];

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/GrillaCompletaPrueba"> Grilla Completa Dog Test </Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/RGrilla">RGrilla</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/rGrilla">
            <button id="btnFind" onClick={FindDogs}>
              Ver Perros
            </button>
            <br></br>
            <RGrid
              key="RGrid1"
              Tittle="Grilla Dogs"
              rows={Dogs}
              columns={GrillaConfiguracion}
              ShowDelete
              Export
              DeleteId={id => console.log(id)}
              isLoading={isCargando}
            />
          </Route>
          <Route path="/GrillaCompletaPrueba">
            <GrillaCompleta></GrillaCompleta>
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <h2>Home</h2>;
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
