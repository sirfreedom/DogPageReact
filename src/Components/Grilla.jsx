import React, {useState} from 'react'

const GrillaEvent = user => {
  console.log('hola mundo');
  console.log(user.nombre);
};

const Grilla = () => {
  const [filas, setFilas] = useState
  (
    [{nombre: 'rodrigo', apellido: 'perez'}],
    [{nombre: 'pepe', apellido: 'gomez'}]
  );

  return (
    <>
    <div>
      <table key="tGrilla">
        <thead>
          <tr>
            <th>comando</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((item, i) => {
            return (
              <tr>
                <td>
                  <button onClick={GrillaEvent(item)}> seleccionar </button>
                </td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Grilla;
