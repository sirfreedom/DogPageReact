import React ,{useEffect} from 'react'


const CarritoCompra = props => 
{

  useEffect(() => 
  {
    
  }, [props.DogId]);


  return (
    <>
      <a key={'a' + Math.random().toString() } href='' id='a' alt="a" >
        {props.DogId}
      </a>

    </>
  );
};

export default CarritoCompra;
