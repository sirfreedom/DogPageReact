export const ListAll_Breeds = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  const res = await fetch(url);
  const data = await res.json();
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


//

