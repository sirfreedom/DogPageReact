import React ,{useEffect} from 'react';


const CarritoCompra = props => {

  useEffect(() => {
    //console.log("paso useefect");
  }, [props.DogId]);


  return (
    <>
   
      <a>
        {props.DogId}
      </a>

    </>
  );
};

export default CarritoCompra;
