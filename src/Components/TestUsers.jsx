import { useEffect, useState } from "react";


const GrillaEvent = user => {
    //console.log('hola mundo');
    //console.log(user.name);
};


const ListAll = async () => {
  const url = 'https://raw.githubusercontent.com/sirfreedom/DogPageReact/main/user.json';
  let data = [];
  let res;
  try{
  res = await fetch(url, {'mode': 'no cors','headers': {'Access-Control-Allow-Origin': '*', } });
  data = await res.json().catch(err => console.log(err));
  }
  catch(ex){
    console.log(ex);
  }
  return data;
};


const TestUsers = () => {
  
    const [filas, setFilas] = useState
    (
      [
        {
          'balance': '$3,946.45',
          'age': 23,
          'name': 'Bird Ramsey',
          'gender': 'male'
        },
        {
          'balance': '$2,499.49',
          'age': 31,
          'name': 'Lillian Burgess',
          'gender': 'female',
        }/*,
        {
          'balance': '$2,820.18',
          'age': 34,
          'name': 'Kristie Cole',
          'gender': 'female',
        },
        {
          'balance': '$3,277.32',
          'age': 30,
          'name': 'Leonor Cross',
          'gender': 'female',
        },
        {
          'balance': '$1,972.47',
          'age': 28,
          'name': 'Marsh Mccall',
          'gender': 'male',
        }*/
      ]
    );
  
useEffect( () => {

  ListAll().then(lUser => {
    console.log("luser");
    console.log(lUser);
    //setFilas(lUser);
  });
  
},[]);
  
  
  

    return (
        <>

    <div>
      <table key="tGrilla" width="100%">
        <thead>
          <tr>
            <td></td>
            <td>balance</td>
            <td>age</td>
            <td>name</td>
            <td>gender</td>
          </tr>
        </thead>
        <tbody>
          {filas.map((item, i) => {
            return (
              <tr>
                <td>
                  <button onClick={GrillaEvent(item)}> seleccionar </button>
                </td>
                <td>{item.balance}</td>
                <td>{item.age}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
    );
}

export default TestUsers