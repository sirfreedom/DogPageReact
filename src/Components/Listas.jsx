import React,{useState} from 'react'

const Listas = () =>{

    const [lista,setLista] = useState([1,2,3,4,5])





    return (
        <div>
            <ul>
            {
                lista.map( (item, i ) => {
                    return <li key={i} > {item}   </li>

                })                
            }
            </ul>

        


        </div>
    )
}

export default Listas
