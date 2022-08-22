import React, {useEffect,useState} from 'react';
//import {If, Then, Else} from 'react-if'; 

const Card = ({dog}) => {

  const [imgDog,setimgDog] = useState('');

  useEffect(() => 
  {
    debugger;
    
    if (typeof(dog) !== 'undefined')
    {
        if ( typeof(dog.reference_image_id)  !== 'undefinded' ){
          setimgDog('https://cdn2.thedogapi.com/images/' + dog.reference_image_id + '.jpg');
        }
    }

  }, [dog]);


  return (
  <>
    <img width="30%" height="30%" src={(imgDog === '') ? '/undefined.jpg' : (imgDog) } alt="Dogs" />
  </>
  
 )


};
export default Card;
