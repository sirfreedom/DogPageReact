import React, {Fragment, useState } from 'react';
import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrillaCompleta from './Components/GrillaCompleta';
import Select from './Components/Select';
import Card from './Components/Card';
import { GetDog } from './Components/Helpers';
import Modal from 'react-bootstrap/Modal';
//import ModalTitle from 'react-bootstrap/ModalTitle'
//import ModalBody from 'react-bootstrap/ModalBody'
//import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from 'reactstrap';


const InitialDog = {
  id : 0,
  name : "ssss",
  life_span: ""
}

function App() {

 const [dog,setDog] = useState(InitialDog);
  
 const updateDogs = (Id) => {
  //console.log(Id);

  GetDog(Id).then((g) => {
    setDog(g);
    //console.log(g);
  })
 }


  return (
    <Fragment>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

      <div>



      <Select key="ddlBreeds" updateDogs={updateDogs} ></Select>
      <GrillaCompleta key="gBreeds" ></GrillaCompleta> 
      <Card dog={dog} > </Card>



      </div>
</div>





</Fragment>
  );
}

export default App;
