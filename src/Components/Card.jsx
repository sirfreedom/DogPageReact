import React, { useState, Fragment } from 'react'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const Card = ({dog}) => {
    return (
        <div>
       
            <If condition={dog.reference_image_id == undefined }>
              <Then>
             <a> Empty </a>
             </Then>
                <Else>

             <img width="80" height="200"  src={"https://cdn2.thedogapi.com/images/" + dog.reference_image_id + ".jpg" }  alt="Dogs"></img>

               </Else>
             </If>
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
