import React, {useState} from 'react';

const Perro = () => {
  var oFinanza = [
    [
      {
        Orden: 1,
        Tipo: 'Tarjeta Visa1',
        Valor: 1000,
        Fecha: 1,
      },
    ],
  ];

  const [lista, setLista] = useState(oFinanza);

  const BuscarFinanza = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        setLista(data.Record);
      })
      .catch(error => {
        this.setState({errorMessage: error.toString()});
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <table>
        <button
          className="p-3 mb-2 bg-success text-white"
          onClick={e => {
            BuscarFinanza();
          }}
        >
          {' '}
          TRAER TARJETAS{' '}
        </button>
        {lista.map((row, idx) => {
          return (
            <tr>
              <td></td>
              <td>{row.Tipo}</td>
              <td>{row.Valor}</td>
              <td>{row.Fecha}</td>
              <td></td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Perro;
