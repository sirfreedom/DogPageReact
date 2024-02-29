



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

export const Prueba = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  let data;
  let res;
  try
  {
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


export const GetDog = async id => {
  let url = 'https://api.thedogapi.com/v1/breeds/';
  let res;
  let data = [];
  try{

    if(id === '0')
    {
      return data;
    }

  url = url + id;
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

export const getUsuario = (sUser, sPass) => {
  let jsonuser = JSON.stringify(
    '[{"id":1,"user":"a","pass":"a"},{"id":2,"user":"b","pass":"b"},{"id":3,"user":"c","pass":"c" }]"'
  );
  let lUser = jsonuser.find(x => x.user === sUser && x.pass === sPass);
  let b = false;
  b = lUser.count() === 1;
  return b;
};


export const getStorage = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}


export const setStorage = (key, value) =>
{
  localStorage.setItem(key, JSON.stringify(value));
}


const getUploadParams = ({ file, meta }) => {
  const body = new FormData();
  body.append('fileField', file);
  return { url: 'https://httpbin.org/post', body };
}



