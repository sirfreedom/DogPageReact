import React, { Fragment } from 'react'
import { If, Then, Else, Switch, Case, Default } from 'react-if';


const options = ['Monday', 'Tuesday', 'Thursday', 
'Friday', 'Saturday', 'Sunday']

const Saludar = (props) => {
      return (
      <Fragment>
         <p> hola mundo {props.nombre} </p>

      <If condition={16 >= props.edad}>
            <Then>
                  <span className="ok"> Have a beer {props.nombre} </span>
            </Then>
            <Else>
                  <span className="not-ok"> Sorry, {props.nombre}, you are not old enough.</span>
            </Else>
      </If>

      <br></br>

      <Switch >
      <Case condition={16 >= props.edad} >
        <span>Component 1</span>
      </Case>
      <Case condition={16 < props.edad} >
        <span>Component 2</span>
       </Case>
      <Default>
         <span>Nothing!</span>
       </Default>
      </Switch>

      </Fragment>
          
       
    )
}

export default Saludar
