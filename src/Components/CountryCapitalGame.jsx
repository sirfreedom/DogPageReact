import React, {useEffect, useState, Fragment} from 'react';
import {If, Then, Else, Switch, Case, Default} from 'react-if';

const InitialPreguntas = [
  {aswer: '1+1', response: '2'},
  {aswer: '2+2', response: '4'},
];

const CountryCapitalGame = props => {
  const [Lista, setLista] = useState(InitialPreguntas);

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

// You can also use class components
// export default class CountryCapitalGame extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return <div>Your game component</div>;
//     }
// }
