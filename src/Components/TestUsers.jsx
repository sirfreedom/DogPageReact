import { useEffect, useState } from "react";


const GrillaEvent = value => {
    //console.log('hola mundo');
    //console.log(user.name);
};


const ListAll = async () => {
  const url = 'https://raw.githubusercontent.com/sirfreedom/DogPageReact/main/user.json';
  let data;
  try
  {
  await fetch(url).then(resp => resp.json()).then(repo=> 
  {
    data = repo;
  }).catch(ex => 
  {
    console.error(ex);
  })

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
      
      ]
    );
  
useEffect( () => {

  ListAll().then(lUser => {
    console.log("luser");
    console.log(lUser);
    setFilas(lUser);
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