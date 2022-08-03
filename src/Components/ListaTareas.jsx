import React,{useReducer,useRef} from 'react';

const ListaTareas = () => {

const txtTaskRef = useRef();

const [tasks, dispatch ] = useReducer( (state = [], action) => 
{
    let newState = [];
    let indexDelete = 0;
    let returnState = [];

    newState = [...state];

    switch(action.type)
    {
        case 'add': 
            return [...state, { id: action.id, tittle: action.tittle }]
        case 'del':
            indexDelete = newState.findIndex(x => x.id == action.id); // find the index which was deleted
            newState.splice(indexDelete, 0, action.tittle);  // splice, mark the item as undefined
            
            // add to new list items which have not been marked as undefined
            for(let i = 0; i < newState.length;i++) 
            { 
                if (newState[i] != undefined ) 
                { 
                    returnState.push(state[i]);
                }  
            }
            // the list has one item as undefined, so it must delete this.

            returnState.pop(); // this line is deleting last item
            return returnState;
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
