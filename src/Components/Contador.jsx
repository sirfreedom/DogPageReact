import React, {useState} from 'react';

const Contador = props => {
  const [nombre, setNombre] = useState('manzana');
  const [valorinicial, setvalorinicial] = useState(parseInt(props.valorinicial));

  const text_onchange = e => {
    setNombre(e.target.value);
  };

  const button1_onclick = () => {
    setvalorinicial(valorinicial + 1);
  };

  return (
    <>
      <p>dddd</p>
      <p>
        {nombre} {valorinicial}{' '}
      </p>
      <input type="text" onChange={e => text_onchange(e)}></input>

      <button onClick={() => button1_onclick()}> Incrementar </button>
    </>
  );
};

export default Contador;
