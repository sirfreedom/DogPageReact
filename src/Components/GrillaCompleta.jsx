import React, {useState, Fragment} from 'react'
import {ListAll_Breeds} from './Helpers'


const GrillaCompleta = () => {

    var oBreed = [
        [
            {
                "id":1,
                "name": "",
                "temperament": "Tarjeta Visa1",
                "life_span": "",
                "origen": "",
                "weight":0,
                "height":0
            }
        ]
    ]

const [Breeds,setBreeds] = useState(oBreed)

/*
https://docs.thedogapi.com/api-reference/breeds/breeds-list
    const ListTarjetas = ()=>{
        var json_ale =  {"Record":[{"id":1,"Tipo":"Capacitacion","Valor":-4400,"Fecha":"2/2021",
                      "Descripcion":null,"IdTipo":0},
                      {"id":2,"Tipo":"Pelotudo","Valor":-4400,
                      "Fecha":"3/2021","Descripcion":null,"IdTipo":0},
                      {"id":3,"Tipo":"OTRAS COSA","Valor":-5000,"Fecha":"4/2021","Descripcion":null,"IdTipo":0},
                      {"id":4,"Tipo":"Capacitacion","Valor":-5150,"Fecha":"5/2021","Descripcion":null,"IdTipo":0}]};
                 debugger;
                      actualizar_lista_tarjetas(json_ale.Record)
      }

    const get_group_rows = (flat_array, cols)=>{
        var arrays = []
        var row_size = cols
        for (let i = 0; i < flat_array.length; i += row_size)
        arrays.push(flat_array.slice(i, i + row_size));
        return arrays
    }
    
    const actualizar_lista_tarjetas = (array_tarjetas)=>{
        const tarjetasRows = get_group_rows(array_tarjetas,2)
        console.log(tarjetasRows)
        setLista(tarjetasRows)
    }
    */

    const ListAll = ()=> 
    {
        ListAll_Breeds()
        .then((data) => {
            setBreeds(data)
        })
    }

    const GrillaEvent = (vId) => {
        console.log(vId);
        
    } 


   


    const CreateTable = () =>
    {
        return <table key="tBreeds" className="table" >
        <thead key="thead">
          <tr>
            <th></th>
            <th scope="col">Comando </th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Temperament</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {Breeds.map((row,idx) =>{
                    return <tr key={idx} >
                            <td>
                                <button onClick={() => GrillaEvent(row.id) } > seleccionar </button>
                            </td>
                            <td>
                              {row.id}
                            </td>
                            <td>
                              {row.name}  
                            </td>
                            <td>
                              {row.temperament} 
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                        </tr>
                    } )
                }
        </tbody>
        <tfoot key="tfoot">
        </tfoot>
        </table>
    }

    return (
        
        <div key="div1" > 
        <button className="p-3 mb-2 bg-primary text-white" key="btnList" onClick={e => {ListAll()}} > TRAER TARJETAS </button>
        {
             CreateTable()
        }







        </div>
    )
}



export default GrillaCompleta