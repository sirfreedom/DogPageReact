import '../Css/App.css';
import React, { useState,useEffect } from "react";
import {CitizenTest} from './Helpers';

export const CitizenExam = () => {
    
    const [Test, setTest] = useState([]);

    useEffect(() => {
        CitizenTest().then(lTest => {
          setTest(lTest);
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

            alert(iCorrectAnwers);

        }
        catch (e) {
            alert(e.message);
        }
        //document.querySelector('input[className = Respuesta]:checked').getAttribute('data-respuesta');
        //var checkboxes = document.getElementsByClassName("Respuesta");
        //const radioButtons = form.elements.map(element => { return <input type="radio" name={element.name} key={element.id} />;  });
    }

    return (
        <>

        {Test.map((rowQuestion, idQuestion) => 
        {
        return (

        <fieldset>

        <legend>
            <p className="pregunta"> {rowQuestion.question} ?. 
            <a className='numero'> Pregunta nº {idQuestion+1} 
            </a>  
            </p>
        </legend>

        {rowQuestion.answers.map((rowAnswer, idAnswer) => 
        {
        return (
                <div>
                    <p class="respuesta"> 
                       <input className='radio' type="radio" id={idAnswer} name={idQuestion} radioGroup={idQuestion}  data-respuesta={rowAnswer.valid} ></input>
                       <label className='answer' for={idAnswer} > {rowAnswer.text} </label>
                    </p>
                </div>
            );
        })}
        <br></br>
        </fieldset>
        );
        })}

        <button onClick={ValidQuestion}> seleccionar </button>
        </>
    
      )}

    export default CitizenExam