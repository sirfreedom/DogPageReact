import { useState,createContext,useContext } from "react";

export const UserContext = createContext();
export const UserChangeContext = createContext();

export const UserProvider = (props) => {

const [user,setUser] = useState({ name: '', pass: ''});;

const ChangePass = (jsonuser) => 
{
    setUser(jsonuser);
}


return (
  <UserContext.Provider  value={user}>
      <UserChangeContext.Provider value={ChangePass} >
          {props.children}
      </UserChangeContext.Provider>
  </UserContext.Provider>
);
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserChangeContext () {
  return useContext(UserChangeContext);
}

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



