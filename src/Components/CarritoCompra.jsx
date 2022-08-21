import React ,{useEffect} from 'react';


const CarritoCompra = props => {

  useEffect(() => {
    console.log("paso useefect");
  }, [props.DogCode]);


  return (
    <>
    <img width="80%"
          height="80%"
          src={'https://cdn2.thedogapi.com/images/' + props.DogCode + '.jpg'}
          alt="Dogs">
        </img>
    
      <a>
        {props.DogId}
      </a>

    </>
  );
};

export default CarritoCompra;
