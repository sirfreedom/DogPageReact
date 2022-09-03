import React, { useEffect, useState, useContext  } from "react";
import {Button} from 'react-bootstrap/';
import { UserContext } from "./Helpers";

const Login = props => {

  const [user, setUser] =  useContext(UserContext);  

  useEffect(() => {

  }, []);

  const Save = () => {

  }

  return (
    <>
      <br></br>
      <table align="center">
        <tr>
          <td>
            <label>
              el usuario es
            </label>
            <label>
                {user}
            </label>
            <input id="txtUsuario" className="Text" key="txtUsuario" value={user} type="text"></input>
          </td>
        </tr>
        <tr>
          <td align="right">
              <Button onClick={() => Save()}>Save</Button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Login;
