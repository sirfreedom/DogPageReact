import React from 'react';
import {Modal, Button} from 'react-bootstrap/'
import Card from './Card';

function ModalEdicion(props) {


  const Save = () => {
    const tnombre = document.getElementById('tnombre');
    props.cbGuardarPerro({...props.dog, name: tnombre.value}); 
  };


  return (
    <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Row Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <table>
          <thead>
            <tr>
              <th>Test edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre :</td>
              <td>
                <input
                  id="tnombre"
                  key="txtNombre"
                  type="text"
                  className="form-control"
                  defaultValue={props.dog.name}
                ></input>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <div>
          <Card dog={props.dog} href="#">
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

export default ModalEdicion;
