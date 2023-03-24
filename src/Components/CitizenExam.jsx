import React, { useState,useEffect } from "react";
import {CitizenTest} from './Helpers';

export const CitizenExam = () => {
    
    const [Test, setTest] = useState([]);

     useEffect(() => {
        CitizenTest().then(lTest => {
          setTest(lTest);
        });
    }, []);

      return (
        <>
        <h1> Questionario </h1>
        <br></br>

        {Test.map((rowQuestion, idQuestion) => 
        {
        return (

        <fieldset>

        <legend>
            {rowQuestion.question}
        </legend>

        {rowQuestion.answers.map((rowAnswer, idAnswer) => 
        {
        return (
                <>
                    <div>
                        <input type="checkbox" id={idAnswer} name={idAnswer}  ></input>
                        <label for={idAnswer} > {rowAnswer.text} </label>
                    </div>
                </>
            );
        })}

        </fieldset>

        );
        })}
        



        </>
    
      )}
    
    export default CitizenExam