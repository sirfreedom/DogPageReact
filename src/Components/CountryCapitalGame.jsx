import React, { useState} from 'react'


const InitialPreguntas = [
  {aswer: '1+1', response: '2'},
  {aswer: '2+2', response: '4'},
];

const CountryCapitalGame = props => {
  const [Lista] = useState(InitialPreguntas);

  return (
    <div>
      <p> ppp </p>

      <table>
        <thead>
          <tr>
            <td>comando</td>
          </tr>
        </thead>
        <tbody>
          {Lista.map((item, i) => {
            return (
              <tr>
                <td>
                  <button> {item.aswer} </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryCapitalGame;

