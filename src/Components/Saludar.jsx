import React from 'react';
import {Switch, Case, Default} from 'react-if';

const Saludar = props => {
    
  return (
    <>
      <p> hola mundo {props.nombre} </p>

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
    </>
  );
};

export default Saludar;
