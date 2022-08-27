
export const ListAll = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  let data;
  let res;
  try{
  res = await fetch(url);
  data = await res.json();
  }
  catch(e){
    throw e;
  }
  return data;
};

export const Prueba = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const GetDog = async id => {
  const url = 'https://api.thedogapi.com/v1/breeds/' + id;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const FindDogs = async value => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + value;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

async function fetchData(){
  const res = await fetch("https://swapi.co/api/planets/");
  var data;
  res.json()
  .then(res => data = res.results)
  .catch(err => console.log(err));
  return data;
}

export const getUsuario = (sUser, sPass) => {
  let jsonuser = JSON.stringify(
    '[{"id":1,"user":"a","pass":"a"},{"id":2,"user":"b","pass":"b"},{"id":3,"user":"c","pass":"c" }]"'
  );
  let lUser = jsonuser.find(x => x.user === sUser && x.pass === sPass);
  let b = false;
  b = lUser.count() === 1;
  return b;
};

function getStorage(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

function setStorage(key, value)
{
  localStorage.setItem(key, JSON.stringify(value));
}



