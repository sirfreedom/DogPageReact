import React, {useState} from 'react';
import {FindDogs} from './Helpers';
import {ListAll_Breeds} from './Helpers';
import {GetDog} from './Helpers';
import {Button} from 'react-bootstrap/';
import {useEffect} from 'react';
import ModalEdicion from './ModalEdicion';

const GrillaCompleta = () => {
  const [dogs, setDogs] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [query, setQuery] = useState('');
  const [dog, setDog] = useState([]);

  const ListAll = () => {
    //setDogs(dogs.filter(dog => dog.name === query));
    FindDogs(query).then(listaPerros => {
      setDogs(listaPerros);
    });
  };

  const GridEdit = idPerro => {
    GetDog(idPerro).then(perro => {
      setDog(perro);
      setModalEdit(true);
    });
  };

  const handleBuscador = e => {
    setQuery(e.target.value);
  };

  const SaveDog = perro => {
    setModalEdit(false); //cierra la modal
    //funcion map: por cada elemento del array pregunta si algun id coincide con el id del perro recibido por argumento
    //si es asi, el callback del map retorna al perro agregandolo a la copia del array dogs, de lo contrario devuelve el perro que ya existia en dogs
    const nuevoEstado = dogs.map(v => (v.id === perro.id ? perro : v));
    setDogs(nuevoEstado);
  };

  useEffect(() => {
    ListAll_Breeds().then(lDog => {
      setDogs(lDog);
    });
  }, []);

  return (
    <React.Fragment>
      <input type="text" onChange={e => handleBuscador(e)} />
      <Button
        className="p-3 mb-2 bg-primary text-white"
        key="btnList"
        onClick={e => {
          ListAll();
        }}
      >
        Buscar
      </Button>
      <table key="tDogs" className="table">
        <thead key="thead">
          <tr>
            <th scope="col">Sel </th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>
                  {row.id ? <Button onClick={() => GridEdit(row.id)}> Edit </Button> : 'Empty'}
                </td>
                <td>{row.name}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot key="tfoot"></tfoot>
      </table>

      <div>
        <ModalEdicion
          show={modalEdit}
          onHide={() => setModalEdit(false)}
          dog={dog}
          cbGuardarPerro={SaveDog}
        />
      </div>
    </React.Fragment>
  );
};

export default GrillaCompleta;
