import React, {useState} from 'react';
import {ListAll_Breeds} from './Helpers';
import {GetDog} from './Helpers';
import {Modal, Button} from 'react-bootstrap/';
import {If, Then, Else} from 'react-if';
import Card from './Card';
import {useEffect} from 'react';

const GrillaCompleta = () => {
  const [dogs, setDogs] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dog, setDog] = useState([]);
  const [query, setQuery] = useState('');

  const ListAll = () => {
    setDogs(dogs.filter(dog => dog.name === query));
  };

  const GridEdit = vId => {
    GetDog(vId).then(g => {
      setDog(g);
      setModalEdit(true);
      console.log(modalEdit);
    });
  };

  const Save = () => {
    setModalEdit(false);
    console.log('Pasa por el puto Save');
    //console.log(dog);
  };

  const SaveDogName = e => {
    e.preventDefault();
    //debugger;
    setDog({...dog, name: e.target.value});
  };

  function ModalEdicion(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Row Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <table>
            <thead>
              <div>Test edit</div>
            </thead>
            <tbody>
              <tr>
                <td>Nombre :</td>
                <td>
                  <input
                    key="txtNombre"
                    type="text"
                    className="form-control"
                    onChange={event => SaveDogName(event)}
                    value={dog.name}
                  ></input>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <div>
            <Card dog={dog} href="#">
              {' '}
            </Card>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={() => Save()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleBuscador = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    ListAll_Breeds().then(listaPerros => {
      setDogs(listaPerros);
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
                  <If condition={row.id === undefined}>
                    <Then>Empty</Then>
                    <Else>
                      <Button onClick={() => GridEdit(row.id)}> Edit </Button>
                    </Else>
                  </If>
                </td>
                <td>{row.name}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot key="tfoot"></tfoot>
      </table>

      <div>
        <ModalEdicion show={modalEdit} onHide={() => setModalEdit(false)} />
      </div>
    </React.Fragment>
  );
};

export default GrillaCompleta;
