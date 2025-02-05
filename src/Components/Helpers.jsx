
export const GetDog = async id => {
  let url = 'https://api.thedogapi.com/v1/breeds/' + id;
  let res;
  let data = [];
  try{
  res = await fetch(url);
  data = await res.json().catch(err => console.log(err));
  }
  catch(ex){
    console.log(ex);
  }
  return data;
};

export const FindDogs = async value => {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + value;
  let res;
  let data = [];
  try {
  res = await fetch(url);
  data = await res.json().catch(err => console.log(err));
  }
  catch(ex){
    console.log(ex);
  }
  return data;
};

export const InsertComment = () => 
{
  const url = 'https://reqres.in/api/posts';
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ title: 'Manzana' })
      body: JSON.stringify({"name": "manzana turquoise", "year": 2022, "color": "#53B0AE"})
      //
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.id));
  };


  export const ListAll = async () => {
    const url = 'https://api.thedogapi.com/v1/breeds';
    let data = [];
    let res;
    try{
    res = await fetch(url);
    data = await res.json().catch(err => console.log(err));
    }
    catch(ex){
      console.log(ex);
    }
    return data;
  };


  export const insertImage = async (base64Image) => 
  {
    var dataimage = {imagebase64: "manzana" };
    try {
        const response = await fetch('https://sirfreedom.somee.com/api/File', 
         {
            method: 'POST',
            mode: 'no-cors',
            body:  JSON.stringify(dataimage),
            headers: 
            {
                'Content-Type': 'application/json',
            }

        });
        const data = await response.json();
        console.log(data); // Maneja la respuesta de la API
    } catch (error) {
        console.error('Error al enviar la imagen:', error);
    }
};


export const enviarDatos = async () => {
  const url = "https://sirfreedom.somee.com/api/File";

  try {
      const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "text/char" },
          credentials: 'include',
          mode: 'no-cors',
          body: 'React POST Request Example',
          //body: JSON.stringify({ imagebase64: 'React POST Request Example' }),
          //body: JSON.stringify({ imagentext: 'email'  }),
          
      });

      console.log(response);

      const result = await response.json();
      console.log('Datos enviados:', result);
  } catch (error) {
      console.error('Error:', error);
  }
};
  