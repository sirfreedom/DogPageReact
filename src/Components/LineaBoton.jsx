import React from 'react'
import {enviarDatos} from './Helpers'

const LineaBoton = () => {

    const Test = () => 
    {
        enviarDatos();
    };


    return (
        <>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className="p-3 mb-2 bg-primary text-white" onClick={Test}  >.bg-primary</div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


    <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
    <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
    <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
    <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
    <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
    <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
    <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
    <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
    <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
               
        </>
    );
}

export default LineaBoton
