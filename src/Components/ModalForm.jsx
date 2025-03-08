import React,{useState} from 'react'
import {Modal, Button} from 'react-bootstrap/'

function ModalForm(props) {

    const [User, setUser] = useState([]);

    const Save = () => {
    
        setUser
        (
          { 
            username: document.getElementById("txtName").value,
            userage: document.getElementById("txtAge").value,
            usercar: document.getElementById("ddlCar").value 
          }
        )
        console.log(User);
        props.onHide(false); // Se cierra devolviendo por props 
    }

    return (
    <>
      <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Form Edition</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">

      <table className='Table' align="Center" width="50%" >
        <tbody>
      <tr>
        <td className='TableCell'>
        <label>Enter your name:
            <input id="txtName" key="txtName" type="text" className='Text' name="username"  />
        </label>
        </td>
      </tr>
            <tr>
                <td className='TableCell'>
                <label>Enter your age:
                    <input type="number" className='Text' name="age" id="txtAge" key="txtAge"  />
                </label>
                </td>
            </tr>
            <tr>
                <td className='TableCell'>
                    <label >Select Your Car 
                    <select id="ddlCar" key="ddlCar" name="car" className='Text' >
                    <option value="1">Ford</option>
                    <option value="2">Volvo</option>
                    <option value="3">Fiat</option>
                    </select>
                    </label>
                </td>
          </tr>
          </tbody>
        </table>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={() => Save()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
  
  export default ModalForm;