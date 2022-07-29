import React from 'react';



const Login = props => {
  return (
    <>
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
    </>
  );
};

export default Login;
