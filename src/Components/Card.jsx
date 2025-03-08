import React, {useEffect,useState} from 'react'

const Card = ({dog}) => {

  const [imgDog,setimgDog] = useState('');
  const [NameDog,setNameDog] = useState('');
  const [GroupDog,setGroupDog] = useState('');
  const [CountryDog,setCountryDog] = useState('');
  const [TemperamentDog,setTemperamentDog] = useState('');
  const [CaracterDog,setCaracterDog] = useState('');
  const [LifeSpanDog, setLifeSpanDog] = useState('');


  useEffect(() => 
  {
        
    if (typeof(dog) !== 'undefined')
    {
        if ( typeof(dog.reference_image_id)  === 'string' )  
        {
          setimgDog('https://cdn2.thedogapi.com/images/' + dog.reference_image_id + '.jpg');
        }
        if ( typeof(dog.name)  === 'string' )
        {
          setNameDog(dog.name);
          setGroupDog(dog.breed_group);
          setCountryDog(dog.country_code);
          setTemperamentDog(dog.temperament);
          setCaracterDog(dog.bred_for);
          setLifeSpanDog(dog.life_span);
        }
    }

  }, [dog]);


  return (
  <>
      <table className="Table">
        <thead>
          <tr>
            <td>
            </td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td className="TableCell" aling="Center">
             <strong> Name : </strong>  {NameDog}
          </td>
        </tr>
        <tr>
          <td className="TableCell" align='Center' >
            <img width="300px" height="300px" src={(imgDog === '') ? '' : (imgDog) } className={(imgDog === '') ? 'imgDog' : '' } alt="Dogs" />
          </td>
        </tr>
        <tr>
          <td className="TableCell">
            Group {GroupDog}
          </td>
        </tr>
        <tr>
          <td className='TableCell'>
            <strong> Country </strong> {CountryDog}
          </td>
        </tr>
        <tr>
          <td className="TableCell">
            <strong> Temperament </strong> {TemperamentDog}
            <br></br>
            <strong> Caracter </strong>
            {CaracterDog}
          </td>
        </tr>
        <tr>
          <td className="TableCell">
          <strong>  Life Span </strong>
           {LifeSpanDog} 
          </td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
             <td>
            </td>
          </tr>
        </tfoot>
      </table>
  </>
  
 )


};
export default Card;
