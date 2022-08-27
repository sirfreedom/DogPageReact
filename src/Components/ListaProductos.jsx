import React, { useState,useEffect } from "react";
import {ListAll} from './Helpers';
import {Button} from 'react-bootstrap/';
import Alert from 'react-bootstrap/Alert';

export const ListaProductos = (props) => {
  const [dogs, setDogs] = useState([]);
  const [dogFilter,setDogFilter] = useState([]);
  const [Wait,setWait] = useState(false);
  const [DogId,setDogId] = useState(0);

  useEffect(() => {

    ListAll().then(lDog => {
      setDogs(lDog);
      setDogFilter(lDog);
      setWait(true);
    });

  }, []);

  const Filter = (text) => 
  {
      (text.length > 1) &&
      setDogFilter(dogs.filter(d => d.name.toLowerCase().includes(text.toLowerCase())));
      (text.length == 0) && setDogFilter(dogs);
  } 

  const dllPets_onChange = (id) => 
  {
      setDogId(id);
  }

  const btnSelect_onClick = () => 
  {
    setDogId(document.getElementById("ddlPets").value);
    props.SelectId(DogId);
  }

  return (
    <>
    <h1> Productos de seleccion </h1>
    <br></br>

    {!Wait &&
    <div>
   <Alert variant="success">
      <Alert.Heading>Wait</Alert.Heading>
      <p>
       Waiting...
      </p>
      <hr />
      <p className="mb-0">
      </p>
    </Alert>
    </div>
    }

    {Wait && 
    <div > 
    Choice your Product 
    <input type="text" onChange={e => Filter(e.target.value)} />
        
    <select name="dllPets" id="ddlPets" onChange={e => dllPets_onChange(e.target.value)}>
    <option value="">--Please choose an option--</option>

    {dogFilter.map((row, rox) => {
       return (
          <option value={row.id} > {row.name} </option>
        );
     })}

    </select>

    <Button id="btnSelect" key="btnSelect" onClick={btnSelect_onClick} > Select </Button>

    </div>
    }
    </>

  )}

export default ListaProductos



