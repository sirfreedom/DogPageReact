import React, {Fragment} from 'react';
import {Switch, Case, Default} from 'react-if';

const Saludar = props => {
  
  

  function ForTest2() {
    let s;

    for (let i = 0; i < 10; i++) {
      s = <li key={i.toString()}>{i.toString()}</li>;
    }
    return s;
  }

  function ForEachTest() {
    var l = [];
    const animals = [
      {id: 1, animal: 'Dog'},
      {id: 2, animal: 'Bird'},
      {id: 3, animal: 'Cat'},
      {id: 4, animal: 'Mouse'},
      {id: 5, animal: 'Horse'},
    ];

    animals.forEach(p => {
      l.push(<li>{p}</li>);
    });
    return <div>{l}</div>;
  }

  function FilterTest() {
    const animals = [
      {id: 1, animal: 'Dog'},
      {id: 2, animal: 'Bird'},
      {id: 3, animal: 'Cat'},
      {id: 4, animal: 'Mouse'},
      {id: 5, animal: 'Horse'},
    ];
    return animals.filter(item => item.animal.includes('o')).map(item => <li> {item.animal} </li>);
  }

  
  function CalcularEdad(edad, nombre) {
    var sReturn;
    if (edad > 16) {
      sReturn = 'Yess ' + nombre + ' You have ' + edad + ' you can drink a beer ';
    } else {
      sReturn = 'Sorry, ' + nombre + ' you are not old enough.';
    }
    return sReturn;
  }

  return (
    <Fragment>
      <p> hola mundo {props.nombre} </p>
      <button onClick={ForTest2}>pspspps</button>
      {CalcularEdad(props.edad, props.nombre)}
      {FilterTest()}
      {ForEachTest()}
      <br></br>

      <Switch>
        <Case condition={16 >= props.edad}>
          <span>Component 1</span>
        </Case>
        <Case condition={16 < props.edad}>
          <span>Component 2</span>
        </Case>
        <Default>
          <span>Nothing!</span>
        </Default>
      </Switch>
    </Fragment>
  );
};

export default Saludar;
