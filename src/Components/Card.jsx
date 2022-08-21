
const Card = ({dog}) => {

  return (
    <>
    
    {dog.reference_image_id !== undefined &&
      
    (
    <><img width="80%"
          height="80%"
          src={'https://cdn2.thedogapi.com/images/' + dog.reference_image_id + '.jpg'}
          alt="Dogs">
        </img><p>Raza: {dog.name}</p><p>Duracion: {dog.life_span}</p>
    </>
    )

      
    }

 </>
  );
};
export default Card;
