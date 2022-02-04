import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RGrid from './Components/RGrid';
import {FindDogs} from './Helpers';

function App() {
  
  
  function Topics() {
    //let match = useRouteMatch();
    return <h2>Topic</h2>;
  }

  const ListAll = () => {
    FindDogs(query).then(lDog => {
      setDogs(lDog);
    });
  };

  const GrillaConfiguracion = [
    {
      Titulo: 'Nombre',
      Selector: fila => fila.Nombre,
      WidthColumn: '20px',
    },
    {
      Titulo: 'Apellido',
      Selector: fila => fila.Apellido,
      WidthColumn: '30%',
    },
  ];

  const Data = [
    {
      Id: 1,
      Nombre: 'pepe',
      Apellido: 'rodriguez',
    },
    {
      Id: 2,
      Nombre: 'natalia',
      Apellido: 'gomez',
    },
    {
      Id: 3,
      Nombre: 'pepita',
      Apellido: 'perez',
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
            <RGrid
              Tittle="Manzana"
              rows={Data}
              columns={GrillaConfiguracion}
              ShowDelete
              DeleteId={id => console.log(id)}
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
