import '../Css/App.css';
import '../Css/bootstrap.min.css';
import React, { useState,useEffect } from "react";
import {getQuestions, getSetting, getMessagesFinalTest,getQuestionLevels} from './Helpers';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CitizenExam = () => {
    
    const [Test, setTest] = useState([]);
    const [ShowValid,setShowValid] = useState(false);
    const [CorrectAnwers,setCorrectAnwers] = useState(0);
    const [DisableAnwers, setDisableAnwers] = useState(false);
    const [IsSelectQuestion,setIsSelectQuestion] = useState(false);
    const [Level, setLevel] = useState(0);
    const [Setting, setSetting] = useState([]);
    const [FinalTestMessage,setFinalTestMessage] = useState([]);
    const [QuestionLevels,setQuestionLevels] = useState([]);
  
    const [ShowWelcome, setShowWelcome] = useState(false);
    const handleWelcomeClose = () => setShowWelcome(false);

    const [ShowFinishAnswer, setShowFinishAnswer] = useState(false);
    const handleFinishAnswerClose = () => setShowFinishAnswer(false);

    useEffect(() => 
    {
        setShowWelcome(true);

        getSetting().then(data => {
          setSetting(data);
        });

        getQuestionLevels().then(data => {
          setQuestionLevels(data);
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

                if (ls[i].checked.toString() === "true" &&  ls[i].dataset.respuesta === "true" )
                {
                  document.getElementById('imgAproboA' + ls[i].dataset.cod).className = "imgAA enabled";
                  iCorrectAnwers++;
                }
                
                if (document.getElementById('imgAproboA' + ls[i].dataset.cod).className !== "imgAA enabled" )
                {
                  document.getElementById('imgAproboA' + ls[i].dataset.cod).className = "imgXX enabled";
                }

            }
            setCorrectAnwers(iCorrectAnwers);
            setShowValid(true);
            setShowFinishAnswer(true);
            setDisableAnwers(true);
            setIsSelectQuestion(false);

            getMessagesFinalTest().then(data => {
              setFinalTestMessage(data);
            });
    
        }
        catch (e) {
            alert(e.message);
        }
    }

    const NewForm = (iLevel) => 
    {
      setCorrectAnwers(0);
      setShowValid(false);
      setDisableAnwers(false);
      setShowWelcome(false);
      setIsSelectQuestion(true);
      setLevel(iLevel);
      getQuestions(iLevel,Setting.questionperpage).then(lTest => {
        setTest(lTest);
      });
    }


return (
<>

<div className='container-fluid mt-2 mb-3' > 

  <div className='row justify-content-center' >
      <div className='col-12 m-2'> 
          <h2> { Setting.tittle } </h2>
      </div>
  </div>

<Accordion key="accordion" defaultActiveKey="0">
      
      {Test.map((rowQuestion, indexQuestion) => 
       {
        return (
        
        <Accordion.Item key={'accordionitem_' + rowQuestion.cod + indexQuestion } eventKey={indexQuestion}>

        <Accordion.Header key={'accordionheader_' + rowQuestion.cod + indexQuestion }  >

        <div key={'rowCuadrado_' + rowQuestion.cod + indexQuestion } className="row justify-content-center" >
          <div key={'colCuadrado' + rowQuestion.cod + indexQuestion } className='col-1'>

            <div  key={'rowNivelCuadrado_' + rowQuestion.cod + indexQuestion } className='row justify-content-start' >
                {rowQuestion.level === 3 && (
                  <div key={'colNivelAlto_'+ rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-lg-1 cuadradoNivelAlto"></div>
                )}
                {rowQuestion.level === 2 && (
                  <div key={'colNivelMedio_' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelMedio"></div>
                )}
                {rowQuestion.level === 1 && (
                  <div key={'colNivelBajo' + rowQuestion.cod + indexQuestion} className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 cuadradoNivelBajo"></div>
                )}
            </div>

            <div className='row'>
              <div className='col-1' >
                  <img key={'imgAproboA' + rowQuestion.cod } id={'imgAproboA' + rowQuestion.cod } className="imgAA disabled" title="Correcta" alt="Correcta" border="0" ></img>
                  <img key={'imgAproboX' + rowQuestion.cod } id={'imgAproboX' + rowQuestion.cod } className="imgXX disabled" title="Incorrecta" alt="Incorrecta" border="0" ></img>
              </div>
            </div>
                
          </div>

          <div className='col-11' >
            <p>
              <strong>
                #{indexQuestion+1}
                  {'. '}  &nbsp;
                {rowQuestion.question} 
              </strong>
            </p>
          </div>
        </div>
        </Accordion.Header>

        <Accordion.Body className='align-items-center' >

          {rowQuestion.answers.map((rowAnswer, idAnswer) => 
          {
          return (
            <div key={'rowRespuesta_' + rowQuestion.cod + indexQuestion + idAnswer } className="row justify-content-center" >
              <div key={'colRespuesta_' +  rowQuestion.cod + indexQuestion + idAnswer } className='col-12 align-items-center'>
                  <p key={'p' + rowQuestion.cod + indexQuestion + idAnswer} id={'p' + rowQuestion.cod + indexQuestion + idAnswer} className="respuesta"> 
                      <input className='radio' type="radio" data-cod={rowQuestion.cod} key={'op' + rowQuestion.cod + indexQuestion + idAnswer } id={'op' + idAnswer} name={indexQuestion} radioGroup={indexQuestion} disabled={DisableAnwers} data-respuesta={rowAnswer.valid} ></input>
                      &nbsp;
                      <label className='answer' id={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} key={'lbl' + rowQuestion.cod + indexQuestion + idAnswer} htmlFor={idAnswer} > {rowAnswer.text} </label>
                      &nbsp;
                      {ShowValid && rowAnswer.valid &&(
                        <img key={'imgA'+ rowQuestion.cod + indexQuestion + idAnswer} id={'imgA'+ rowQuestion.cod + indexQuestion + idAnswer} className="imgA" title="Valida" alt="imagen correcta" border="0" width="10px" height="10px" ></img>
                      )}
                      {ShowValid && !rowAnswer.valid &&(
                        <img key={'imgX' + rowQuestion.cod + indexQuestion + idAnswer} id={'imgX' + rowQuestion.cod + indexQuestion + idAnswer} className="imgX" title="Invalida" alt="imagen incorrecta" border="0" width="10px" height="10px"  ></img>
                      )}
                  </p>
              </div>
            </div>
        );
        })}

        </Accordion.Body>

      </Accordion.Item>
      );
     })}

</Accordion>

<div className='row justify-content-center mt-2 mb-3' >
  <div className='col-12'>
      {IsSelectQuestion && !ShowValid &&(
      <Button key="btnValidQuestion" variant="success" onClick={ValidQuestion} > Completar el Examen </Button>
      )}
  </div>
</div>

  { !IsSelectQuestion  &&  
  (
    <Button variant="primary" onClick={ () => setShowWelcome(true)} > Iniciar un nuevo Examen </Button>
  )}

<Modal key="modalwelcome" show={ShowWelcome} onHide={handleWelcomeClose}>
    <Modal.Header key="modalwelcome_header" closeButton>
      <Modal.Title key="modalwelcome_tittle">
        <p>
          {Setting.subtittle}
        </p>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body key="modalwelcome_body"> 
      <div className='row justify-content-center' >
        <div className='col-12'>
          <p className='align-items-start' >
            {Setting.instruction}
          </p>

          <a key="download" rel="noopener" href={Setting.downloadlink} >
            {Setting.downloadtittle}
          </a>
          <p>
            Revisa las instrucciones antes del inicio del examen.  
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12' >
          <p className='align-items-start'>
            Este examen es a modo de prueba para saber sus conocimientos y poder practicar 
            Suerte...
          </p>
        </div>
      </div>

    </Modal.Body>

    <Modal.Footer key="modalwelcome_footer">
      <div className='row justify-content-center'>
        <div className='col-8' >
          <p className='align-items-center'>
            <strong>
              Nivel de preguntas
            </strong>
          </p>
        </div>
      </div>

    <div className='content' >
      <div className='row justify-content-center'>

      {QuestionLevels.map((item, idx ) => 
      {
       return (
        
     

              <div key={'divquestionlevel' + idx } className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-sm-1'>
                <Button key={'btn' + item.description} variant={item.class} onClick={() => NewForm(item.cod)} > {item.description} </Button>{' '}
              </div>
            
 
            ); //End Return
      })}

      </div>
    </div>
    </Modal.Footer>
</Modal>

<Modal key="modalFinish" show={ShowFinishAnswer} onHide={handleFinishAnswerClose}>

  <Modal.Header key="modalfinish_head"  closeButton>

    <Modal.Title> 
      <p>
        Finalizacion del examen 
      </p>
    </Modal.Title>

  </Modal.Header>

  <Modal.Body key="modalfinish_body" > 

    <div className='row mb-3'>
      <div className='col-12'>
        <p className='align-items-center'> 
          El puntaje obtenido por Ud. fue &nbsp;
            {CorrectAnwers} {' / ' + Setting.correctanswers }  
            &nbsp; 
            Respuestas correctas.
        </p>
      </div>
    </div>
    <div className='row mb-3'>
      <div className='col-12'> 
        <p className='align-items-center'>
          Podes ver las respuestas correctas en cada pregunta.
        </p>
      </div>
    </div>

    {FinalTestMessage.map((item, idx ) => 
    {
     return (
              ( item.levels.filter(x => x.level === Level).length > 0 ) 
              && (CorrectAnwers > item.answersrangemin)  
              && (CorrectAnwers <= item.answersrangemax ) && (  
              <div key={'divrow' + idx} className='row'>
                  <div key={'divcol' + idx} className='col-12' >
                    <p key={'p' + idx} className='align-items-center' > 
                    { item.description }
                   </p>
                  </div>
              </div>
             ));
    })}

  </Modal.Body>

  <Modal.Footer key="modalfinish_footer" >

    <div className='row mt-3' >
      <div className='col-12' >
        <Button key="modalfinish_btnCerrar" variant="secondary" onClick={handleFinishAnswerClose}>
          Cerrar
        </Button>
      </div>
    </div>

  </Modal.Footer>
</Modal>

</div>
</>
    
)}

export default CitizenExam