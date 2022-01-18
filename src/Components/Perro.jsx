import React, {useState, Fragment} from 'react';

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

  /*
    const ListTarjetas = ()=>{
        var json_ale =  {"Record":[{"id":1,"Tipo":"Capacitacion","Valor":-4400,"Fecha":"2/2021",
                      "Descripcion":null,"IdTipo":0},
                      {"id":2,"Tipo":"Pelotudo","Valor":-4400,
                      "Fecha":"3/2021","Descripcion":null,"IdTipo":0},
                      {"id":3,"Tipo":"OTRAS COSA","Valor":-5000,"Fecha":"4/2021","Descripcion":null,"IdTipo":0},
                      {"id":4,"Tipo":"Capacitacion","Valor":-5150,"Fecha":"5/2021","Descripcion":null,"IdTipo":0}]};
                 debugger;
                      actualizar_lista_tarjetas(json_ale.Record)
      }

    const get_group_rows = (flat_array, cols)=>{
        var arrays = []
        var row_size = cols
        for (let i = 0; i < flat_array.length; i += row_size)
        arrays.push(flat_array.slice(i, i + row_size));
        return arrays
    }
    
    const actualizar_lista_tarjetas = (array_tarjetas)=>{
        const tarjetasRows = get_group_rows(array_tarjetas,2)
        console.log(tarjetasRows)
        setLista(tarjetasRows)
    }
    */

  const BuscarFinanza = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        setLista(data.Record);
        //console.log(data.Record);
      })
      .catch(error => {
        this.setState({errorMessage: error.toString()});
        console.error('There was an error!', error);
      });
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Perro;
