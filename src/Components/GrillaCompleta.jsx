import React, {useState, Fragment} from 'react'
import {ListAll_Breeds} from './Helpers'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const GrillaCompleta = () => {

    var oBreed = [
        [
            {
                "id":1,
                "name": "",
                "temperament": "Tarjeta Visa1",
                "life_span": "",
                "origen": "",
                "weight":0,
                "height":0
            }
        ]
    ]

    var oPopUpState = [
        [
            {
                "Show": false,
                "Id": 0
            }
        ]
    ]


const [Breeds,setBreeds] = useState(oBreed);
const [modalShow, setModalShow] = useState(false);

    const ListAll = ()=> 
    {
        ListAll_Breeds()
        .then((data) => {
            setBreeds(data)
        })
    }

    const GrillaEvent = (vId) => {
        console.log(vId);
        
    } 


    function ModalShow()
    {

    }


    function MydModalWithGrid(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Row Edit
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
       
                <a>hola</a>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }


    const CreateTable = () =>
    {
        return <table key="tBreeds" className="table" >
        <thead key="thead">
          <tr>
            <th scope="col">Sel </th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
        {Breeds.map((row,idx) =>{
                    return <tr key={idx} >
                            <td>

                            <If condition={row.id == undefined }>
                             <Then>
                                <a> Empty </a>
                            </Then>
                            <Else>
                            <Button onClick={() => GrillaEvent(row.id) } > Sel </Button>
                                <div>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Edit
                                    </Button>
                                    <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                                </div>
                            </Else>
                            </If>
                            
                            </td>
                            <td>
                              {row.id}
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
        
        <div key="div1" > 
        <button className="p-3 mb-2 bg-primary text-white" key="btnList" onClick={e => {ListAll()}} > TRAER TARJETAS </button>
        {
             CreateTable()
        }


        </div>
    )
}



export default GrillaCompleta