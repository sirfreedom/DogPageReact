import React, { useEffect } from "react";
import {Button} from 'react-bootstrap/';
import { useUserContext,useUserChangeContext } from "./Helpers";

const Login = props => {

  const user =  useUserContext(); 
  const UserChangePass = useUserChangeContext();

  useEffect(() => {

  }, []);


  const Save = () =>
  {
    let vName;
    vName = document.getElementById("txtUsuario").value;
    console.log(vName);
    UserChangePass(vName);
  }


  return (
    <>
      <table align="center">
        <tr>
          <td>
            <label>
              el usuario es 
            </label>
            <label>
                {' ' + user}
            </label>
            <input id="txtUsuario" className="Text" key="txtUsuario"  type="text"></input>
          </td>
        </tr>
        <tr>
          <td align="right">
              <Button onClick={Save}>Save</Button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Login;
