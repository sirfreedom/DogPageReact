import {If, Then, Else} from 'react-if'; //por que se utiliza una libreria??

const Card = ({dog}) => {
  return (
    <div>
      {/* dog.id ?
        <img
          width="80%"
          height="80%"
          src={'https://cdn2.thedogapi.com/images/' + dog.reference_image_id + '.jpg'}
          alt="Dogs"
        />
        : Empty */}
      <If condition={dog.reference_image_id === undefined}>
        <Then>Empty</Then>
        <Else>
          <img
            width="80%"
            height="80%"
            src={'https://cdn2.thedogapi.com/images/' + dog.reference_image_id + '.jpg'}
            alt="Dogs"
          ></img>
        </Else>
      </If>
      <p>Raza : {dog.name}</p>
      <p>Duracion : {dog.life_span}</p>
    </div>
  );
};

export default Card;
