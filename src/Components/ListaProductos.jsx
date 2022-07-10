import React, { useState,useEffect } from "react";
import {ListAll} from './Helpers';
import {Button} from 'react-bootstrap/';
//import { useSelector } from "react-redux";
//import { ProductoHelper } from "./StoreHelper";

export const ListaProductos = () => {
  const [dogs, setDogs] = useState([]);
  const [dogFilter,setDogFilter] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {

    ListAll().then(lDog => {
      setDogs(lDog);
      setDogFilter(lDog);
    });

  }, []);

/*
  useEffect(() => {
    console.log('paso');

  }, [dogFilter]);
*/



  const Filter = (text) => 
  {
    //setFilterName(text);
    //console.log(dogs.filter(item => item.name.includes(text)));
    if(dogs.filter(x => x.name.includes(text)).length > 0 )
    {
      setDogFilter(dogs.filter(x => x.name.includes(text)));
    }
    
  } 


  


  return (
    <>
    <h1> Productos de seleccion </h1>
    Choice your Product 
    <input type="text" onChange={e => Filter(e.target.value)} />

    {dogFilter.length > 0 &&
          <table >
            <thead>
              <tr>
                <td> 

                 </td>
              </tr>
            </thead>
            <tbody>
              {dogFilter.map((dog) => (
                <tr key={dog.id}>
                  <td>
                    <Button id={dog.id} key={dog.id} > {dog.name} </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      }

    </>
);
};

export default ListaProductos

/*
const categorias = useSelector((state) => state.categorias);
const productos = useSelector((state) => state.productos).filter(
  (producto) => producto.idCategoria === categoria.id
);


  const handleSelectCategoria = (e) => {
    setCategoria(
      categorias.find((categoria) => categoria.id === e.target.value)
    );
  };


  return (
    <>
      <label htmlFor="categoria">Categoría: </label>
      <select name="categoria" onChange={handleSelectCategoria}>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
      <FormularioAgregarProducto categoria={categoria} />
     
    </>
  );
};
*/
