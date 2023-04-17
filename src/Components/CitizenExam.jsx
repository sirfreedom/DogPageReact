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
    const [DisableAnwers, setDisableAnwers] = useState(false);
    const [IsSelectQuestion,setIsSelectQuestion] = useState(false);
  
    const [ShowWelcome, setShowWelcome] = useState(false);
    const handleWelcomeClose = () => setShowWelcome(false);

    const [ShowFinishAnswer, setShowFinishAnswer] = useState(false);
    const handleFinishAnswerClose = () => setShowFinishAnswer(false);

    useEffect(() => {
        setShowWelcome(true);
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
                if (ls[i].checked.toString() === "true" &&  ls[i].dataset.respuesta === "true" )
                {
                    iCorrectAnwers++;
                }
            }
            setCorrectAnwers(iCorrectAnwers);
            setShowValid(true);
            setShowFinishAnswer(true);
            setDisableAnwers(true);
            setIsSelectQuestion(false);
        }
        catch (e) {
            alert(e.message);
        }
    }

    const NewForm = (iLevel) => {
  
        CitizenTest(iLevel).then(lTest => {
            setTest(lTest);
        });
        setCorrectAnwers(0);
        setShowValid(false);
        setDisableAnwers(false);
        setShowWelcome(false);
        setIsSelectQuestion(true);
    }

return (
<>

<br></br>
<h2> Bienvenido al examen CCSE 2023 NACIONALIDAD ESPAÑOLA </h2>
<br></br>

<br>
</br>

<Accordion defaultActiveKey="0">
      
      {Test.map((rowQuestion, indexQuestion) => 
        {
        return (
        <Accordion.Item eventKey={indexQuestion}>

        <Accordion.Header>
        
        <table width="100%">
          <tr>
             <td width="2%" >

                {rowQuestion.level === 3 && (
                <div class="cuadradoNivelAlto"></div>
                )}

                 {rowQuestion.level === 2 && (
                <div class="cuadradoNivelMedio"></div>
                )}

                {rowQuestion.level === 1 && (
                <div class="cuadradoNivelBajo"></div>
                )}

             </td>
             <td width="98%">
             <strong>
             #{indexQuestion+1}
             {'. '}  &nbsp;
             {rowQuestion.question} 
            </strong>
             </td>
          </tr>
        </table>

        </Accordion.Header>

        <Accordion.Body>

        {rowQuestion.answers.map((rowAnswer, idAnswer) => 
        {
        return (
                <div >
                    <p class="respuesta"> 
                       <input className='radio' type="radio" id={idAnswer} name={indexQuestion} radioGroup={indexQuestion} disabled={DisableAnwers} data-respuesta={rowAnswer.valid} ></input>
                       &nbsp;
                       <label className='answer' for={idAnswer} > {rowAnswer.text} </label>
                       &nbsp;
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

    {IsSelectQuestion && !ShowValid &&(
    <Button variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
    )}

    { !IsSelectQuestion  &&  (
    <Button variant="primary" onClick={ () => setShowWelcome(true)} > Iniciar un nuevo Examen </Button>
    )}

      <Modal key="mWelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido al examen CCSE 2023 </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <div>
          <table>
            <tr>
              <td width="5%" ></td>
              <td>
                El examen consta de 25 preguntas totalmente aleatorias, obtenidas de unas 300 
                que son tomadas en el examen real, para poder aprobar el examen debe tener 15 preguntas 
                respondidas de forma correcta.
                de esta forma se le tomara el examen para la nacionalidad Española.
                puede elegir preguntas : Random, Nivel bajo, Medio, Alto.
                &nbsp;
              </td>
            </tr>
          </table>
          Este examen es a modo de prueba para saber sus conocimientos y poder practicar para estar mas preprado.
          Suerte...
          </div>
         </Modal.Body>
         <Modal.Footer>
         <table align="center" width="80%">
  <tr>
        <td colSpan="9" align="center" >
          <strong>
            Nivel de preguntas
          </strong>
        </td>
  </tr>
  <tr>
    <td></td>
    <td>
        <Button variant="secondary" onClick={() => NewForm(0)} > Random </Button>{' '}
    </td>
    <td></td>
    <td>
       <Button variant="success" onClick={() => NewForm(1)} >Nivel Facil</Button>{' '}
    </td>
    <td></td>
    <td>
       <Button variant="warning" onClick={() => NewForm(2)} >Nivel Medio </Button>{' '}
    </td>
    <td></td>
    <td>
       <Button variant="danger" onClick={() => NewForm(3)} >Nivel Avanzado</Button>{' '}
    </td>
    <td></td>
  </tr>
</table>


        </Modal.Footer>
      </Modal>

      <Modal key="mFinishAnswer" show={ShowFinishAnswer} onHide={handleFinishAnswerClose}>
        <Modal.Header closeButton>
          <Modal.Title> Finalizacion del examen </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

            El puntaje obtenido por Ud. fue &nbsp;
            {CorrectAnwers} {' /25 '}  &nbsp; Respuestas correctas.
            <br>
            </br>
            Podes ver las respuestas correctas en cada pregunta.
            <br></br>
            
            { (CorrectAnwers > 23 ) && (  
                <a> 
                    Oye tio.!!.. tu eres mas español que el JAMON !! que haces tu aqui ?.. 
                </a>
            ) }

            { (CorrectAnwers >= 15) && (  
                <a> Felicitaciones!!! has aprobado el examen con exito.
                    Aun asi te aconsejo que pruebes unas veces mas para tener todo mucho mas claro.
                </a>
            ) }

            { (CorrectAnwers < 5) && (  
                <a> No has aprobado el examen.. :-/ necesitas estudiar mucho. pero ANIMO.. con tiempo y estudio
                    no dudo que mejoraras.!
                </a>
            ) }

            { (CorrectAnwers < 10 && CorrectAnwers > 5 ) && (  
                <a> No has aprobado el examen.. necesitas estudiar un poquito mas.. 
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