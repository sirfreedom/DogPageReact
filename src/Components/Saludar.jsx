import React,{useState}from 'react';
import {Switch, Case, Default} from 'react-if';

const Saludar = props => {
    
  const [User, setUser] = useState([]);

  const btnOk_Submit = (event) => {
    event.preventDefault();

    setUser
    (
      { 
        username: event.target["txtName"].value,
        userage: event.target["txtAge"].value,
        usercar: event.target["ddlCar"].value 
      }
    )

    console.log(User);

  }

  return (
    <>
      <hr />
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

    <form onSubmit={btnOk_Submit}>

    <table className='Table' align="Center" width="50%" >
      <tr>
        <td className='TableCell'>
        <label>Enter your name:
            <input id="txtName" key="txtName" type="text" className='Text' name="username"  />
        </label>
        </td>
      </tr>
      <tr>
        <td className='TableCell'>
        <label>Enter your age:
        <input type="number" className='Text' name="age" id="txtAge" key="txtAge"  />
        </label>
        </td>
      </tr>
      <tr>
        <td className='TableCell'>
          <label >Select Your Car 
            <select id="ddlCar" key="ddlCar" name="car" className='Text' >
            <option value="1">Ford</option>
            <option value="2">Volvo</option>
            <option value="3">Fiat</option>
           </select>
           </label>
        </td>
      </tr>
      <tr>
        <td align='right' className='TableCell' >
            <input id="btnOK" type="submit" />
        </td>
      </tr>
    </table>
        
    </form>

      
    </>
  );
};

export default Saludar;
