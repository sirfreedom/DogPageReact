import React, {useState, Fragment, useEffect} from 'react'
import { ListAll_Breeds } from './Helpers';

const initialBreeds = [
{
    id : -1,
    name : 'Seleccionar'
},
{
    id : 0,
    name : 'Todos'
}
];

const Select = ({updateDogs}) => {

    const [breeds,setBreeds] = useState(initialBreeds);

    useEffect( () => {
        List();
    },[]);

    
    const List = () => {
        ListAll_Breeds()
        .then((lb) => {
            //console.log(lb);
            setBreeds(lb);
        })

    }

    return (
        <div>





            <h1>
                Select
            </h1>
            <select className="dropdown" onChange={(e)=> updateDogs(e.target.value)} >
            {breeds.map(breed =>(
            <option key={breed.id} value={breed.id}> {breed.name} </option>
            ))}
                
            </select>            
       </div>
    )
}

export default Select
