import React,{useReducer,useRef} from 'react';

const ListaTareas = () => {

const txtTaskRef = useRef();

const [tasks, dispatch ] = useReducer( (state = [], action) => 
{
    switch(action.type)
    {
        case 'add': 
            return [...state, { id: action.id, tittle: action.tittle }]
        case 'del':
            debugger;
            return state;
                //state.filter((task, idx) => task.id == action.id).indexof()
        default:
            return state;
    }
}); 

const SaveTask = ( e ) => 
{
e.preventDefault();
dispatch({
    type: 'add',
    id: Math.floor((Math.random() * 10000) + 1),
    tittle : txtTaskRef.current.value
    });
    txtTaskRef.current.value = "";
}

const DeleteTask = (id) => 
{
    dispatch({type: 'del', id: id })
}

return <>

<div>

    <form onSubmit={SaveTask} >
        <label> Tarea </label>
        <input id='txtTask' type="Text" name="tittle" ref={txtTaskRef} ></input>
        <input type="submit" value="Enviar" ></input>
    </form>

    <br></br>

    <div>
    
    <ul>
    {tasks != undefined && tasks.map((row, idx) => {
        return (
            <li key={idx} >
            {row.tittle}
            <button onClick={() => DeleteTask(row.id)} > Borrar </button>
            </li>
        );
      })}
    </ul>
    </div>

</div>

</>

}

export default ListaTareas;
