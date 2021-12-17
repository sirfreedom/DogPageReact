import React,{useState} from 'react'





const Tarjeta = (props) => {
    const [titulo,setTitulo]= useState(props.obj.descripcion)

    return (
        <div key={"card_"+props.obj} className="card mb-3" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.obj.Tipo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card</h6>
            <p className="card-text">asdasdad</p>
            <a href="#" className="card-btn">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
    )
}

export default Tarjeta