import React, {Fragment, useCallback, useState} from 'react';



useEffect(() => {


}, []);



const Login = props => {
  return (
    <Fragment>
      <br></br>

      <table>
        <tr>
          <td>
            <input id="txtUsuario" key="txtUsuario" type="text"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input id="txtPass" key="txtPass" type="text"></input>
          </td>
        </tr>
      </table>
    </Fragment>
  );
};

export default Login;
