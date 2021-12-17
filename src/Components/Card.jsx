import React, { useState, Fragment } from 'react'


const Card = ({dog}) => {
    return (
        <div>
       
            <img src={"https://cdn2.thedogapi.com/images/" + dog.reference_image_id + ".jpg" }  alt="Girl in a jacket"></img>
             
            <p>
                Raza : {dog.name}
            </p>
            <p>
                Duracion : {dog.life_span}
            </p>
        </div>
    )
}

export default Card
