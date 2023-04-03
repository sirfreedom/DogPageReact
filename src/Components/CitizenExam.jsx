import '../Css/App.css';
import React, { useState,useEffect } from "react";
import {CitizenTest} from './Helpers';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CitizenExam = () => {
    
    const [Test, setTest] = useState([]);
    const [ShowValid,setShowValid] = useState(false);
    const [CorrectAnwers,setCorrectAnwers] = useState(0);

    const [ShowWelcome, setShowWelcome] = useState(false);
    const handleWelcomeClose = () => setShowWelcome(false);

    const [ShowFinishAnswer, setShowFinishAnswer] = useState(false);
    const handleFinishAnswerClose = () => setShowFinishAnswer(false);


    useEffect(() => {
        CitizenTest().then(lTest => {
          setTest(lTest);
          setShowWelcome(true);
        });
    }, []);

    const ValidQuestion = () => 
    {
        var ls;
        var iCorrectAnwers = 0;
        try
        {
            ls = document.getElementsByClassName('radio');
 
            for (let i = 0; i < ls.length; i++)
            {
                ls[i].disabled = true;
                if (ls[i].checked.toString() === "true" &&  ls[i].dataset.respuesta === "true" )
                {
                    iCorrectAnwers++;
                }
            }

            setCorrectAnwers(iCorrectAnwers);
            setShowValid(true);
            setShowFinishAnswer(true);
        }
        catch (e) {
            alert(e.message);
        }
        //document.querySelector('input[className = Respuesta]:checked').getAttribute('data-respuesta');
        //var checkboxes = document.getElementsByClassName("Respuesta");
        //const radioButtons = form.elements.map(element => { return <input type="radio" name={element.name} key={element.id} />;  });
    }

    const NewForm = () => {
        var ls;

        CitizenTest().then(lTest => {
            setTest(lTest);
            setCorrectAnwers(0);
            setShowValid(false);
        });

        ls = document.getElementsByClassName('radio');
 
        for (let i = 0; i < ls.length; i++)
        {
            ls[i].disabled = false;
        }
    }


return (
<>

<br></br>
<h2> Bienvenido al examen CCSE 2023 NACIONALIDAD ESPAÑOLA </h2>
<br></br>

<Accordion defaultActiveKey="0">
      
      {Test.map((rowQuestion, idQuestion) => 
        {
        return (
        <Accordion.Item eventKey={idQuestion}>

        <Accordion.Header>
            {rowQuestion.question} ?. #{idQuestion+1}
        </Accordion.Header>

        <Accordion.Body>

        {rowQuestion.answers.map((rowAnswer, idAnswer) => 
        {
        return (
                <div >
                    <p class="respuesta"> 
                       <input className='radio' type="radio" id={idAnswer} name={idQuestion} radioGroup={idQuestion}  data-respuesta={rowAnswer.valid} ></input>
                       <label className='answer' for={idAnswer} > {rowAnswer.text} </label>
                       {ShowValid && rowAnswer.valid &&(
                       <img
                              className="imgA"
                              title="Valida"
                              border="0"
                              width="18px"
                              height="18px"
                            ></img>
                       )}
                       {ShowValid && !rowAnswer.valid &&(
                        <img
                              className="imgX"
                              title="Invalida"
                              border="0"
                              width="18px"
                              height="18px"
                         ></img>
                       )}
                    </p>
                </div>
            );
        })}
        </Accordion.Body>
      </Accordion.Item>
      
      );
     })}

    </Accordion>

    {!ShowValid &&(
    <Button variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
    )}

    {ShowValid &&(
    <Button variant="primary" onClick={NewForm} >  Iniciar un nuevo Examen </Button>
    )}

      <Modal key="mWelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido al examen CCSE 2023 PRUEBA NACIONALIDAD ESPAÑOLA</Modal.Title>
        </Modal.Header>
        <Modal.Body> El examen consta de 25 preguntas totalmente aleatorias, obtenidas de unas 300 
            que son tomadas en el examen, para poder aprobar el examen debe tener 15 preguntas 
            bien contestadas, las cuales solo seran en forma de opciones.
            <br>
            </br>
            de esta forma se le tomara el examen para la nacionalidad Española.
            <br>
            </br>
            Este examen es a modo de prueba para saber sus conocimientos y poder practicar para estar mas preprado.
            Suerte...
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleWelcomeClose}>
            Empezar el Examen
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal key="mFinishAnswer" show={ShowFinishAnswer} onHide={handleFinishAnswerClose}>
        <Modal.Header closeButton>
          <Modal.Title> Finalizacion del examen </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

            El puntaje obtenido por Ud. fue 
            {CorrectAnwers} {' /25 '} Respuestas correctas.
            <br>
            </br>
            Podes ver las respuestas correctas en cada pregunta.
            <br></br>

            { (CorrectAnwers => 15) && (  
                <a> Felicitaciones!!! has aprobado el examen con exito.
                    Aun asi te aconsejo que pruebes unas veces mas para tener todo mucho mas claro.
                </a>
            ) }

            { (CorrectAnwers < 5) && (  
                <a> No has aprobado el examen.. necesitas estudiar mucho. pero ANIMO.. con tiempo y estudio
                    no dudo que mejoraras.
                </a>
            ) }

            { (CorrectAnwers < 10 && CorrectAnwers > 5 ) && (  
                <a> No has aprobado el examen.. necesitas estudiar un poquito mas.. 
                    una vez mas.. y estas...
                </a>
            ) }

            { (CorrectAnwers < 15 && CorrectAnwers > 10 ) && (  
                <a> No has aprobado el examen.. Pero estuviste MUY MUY Cerca 
                    necesitas estudiar un poquito mas.. 
                    una vez mas.. y estas...
                </a>
            ) }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFinishAnswerClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
 
    <br></br>
    <br></br>

    </>
    
    )}

    export default CitizenExam