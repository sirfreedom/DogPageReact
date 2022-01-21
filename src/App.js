import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  //const [dog,setDog] = useState(InitialDog);

  /*
 const updateDogs = (Id) => {
 console.log(Id);

  GetDog(Id).then((g) => {
     setDog(g);
    console.log(g);
  })
  }
*/

  function Topics() {
    //let match = useRouteMatch();

    return <h2>Topic</h2>;
  }

  /*
function Topic() {
  let { topicId } = useParams();
  return <h1> Seccion: {topicId}</h1>;
}
*/

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
        </ul>

        <Switch>
          <Route path="/GrillaCompletaPrueba">
            <GrillaCompleta></GrillaCompleta>
          </Route>
          <Route path="/topics">
            <Topics /> {/*<h2>Topics</h2>*/}
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
