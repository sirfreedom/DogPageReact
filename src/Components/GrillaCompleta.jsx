import React, {useState} from 'react';
import {ListAll_Breeds} from './Helpers';
import { GetDog } from './Helpers';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import { If, Then, Else } from 'react-if';
import Card from './Card';

const GrillaCompleta = () => {
var oDog = [ [ { "id":0, "name": "", "temperament": "", "life_span": "", "origen": "", "weight":0, "height":0 } ] ];

const [dogs,setDogs] = useState(oDog);
const [modalEdit, setModalEdit] = useState(false);
const [dog,setDog] = useState(oDog);


const ListAll = ()=> 
    {
        ListAll_Breeds()
        .then((lg) => {
            setDogs(lg)
        })
    }

    const GridEdit = (vId) => {
      
      GetDog(vId)
      .then((g) => {
        setDog(g);
        setModalEdit(true);
        console.log(modalEdit);
      })
    } 

    const Save = () => {
      //setModalEdit(false);
      console.log("Pasa por el puto Save")
      //console.log(dog); 
    }

    const SaveDogName = (e) => 
    {
      e.preventDefault();
      //debugger;
      let tdog = {...dog,name: e.target.value};
      setDog ( tdog );
    }

    function ModalEdicion(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Row Edit
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
            <table>
                  <thead>
                      <div>Test edit</div>
                   </thead>
                   <tbody>
                      <tr>
                        <td>
                          Nombre : 
                        </td>
                        <td>
                          <input key="txtNombre" type="text" className="form-control" onChange={(event)=>SaveDogName(event)} value={dog.name} ></input>
                        </td>
                      </tr>
                      </tbody>
                      <tfoot></tfoot>
                  </table>
                  <div>
                      <Card dog={dog} href="#" > </Card>
                  </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
              <Button onClick={() => Save() }>Save</Button>
            </Modal.Footer>
          </Modal>
        );
     }

    function CreateTable ()
    {
        return <table key="tDogs" className="table" >
        <thead key="thead">
          <tr>
            <th scope="col">Sel </th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
        {dogs.map((row,idx) => {
                    return <tr key={idx} >
                            <td>
                            <If condition= {row.id === undefined }>
                             <Then>
                                Empty
                             </Then>
                            <Else>
                               <Button onClick={() => GridEdit(row.id) } > Edit </Button>
                            </Else>
                            </If>
                            </td>
                            <td>
                              {row.name}  
                            </td>
                        </tr>
                    } )
                }
        </tbody>
        <tfoot key="tfoot">
        </tfoot>
        </table>
    }

    return (
      <React.Fragment>

        <Button className="p-3 mb-2 bg-primary text-white" key="btnList" onClick={e => {ListAll()}} > Listar </Button>
        {
             CreateTable()
        }

        <div>
          <ModalEdicion show={modalEdit} onHide={() => setModalEdit(false)} />
        </div>

    </React.Fragment>
    )
}

export default GrillaCompleta