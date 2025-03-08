import React from 'react';
import Button from 'react-bootstrap/Button';



const LogOut = () => {


  const CloseSession = () =>
  { 
    localStorage.clear();
    window.location.reload();
  }


return (
      <>

        <div className='row'>
            <div className='col-10'>
            </div>
            <div className='col-2'>
                <Button className='btn btn-danger' key="btnLogout" variant="success" onClick={CloseSession} > Cerrar Session </Button>
            </div>
        </div>

      </>
 )}

export default LogOut;














    