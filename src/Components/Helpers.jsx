


export const getQuestionLevels = async () =>
{
  let url = 'https://raw.githubusercontent.com/sirfreedom/TestSpainCitizen/main/test1.json';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.questionlevels;
  }
  catch(ex){
    console.log(ex);
  }
  return data;
}


export const getMessagesFinalTest = async () =>
{
  let url = 'https://raw.githubusercontent.com/sirfreedom/TestSpainCitizen/main/test1.json';
  let res;
  let data = [];
  let tempdata = [];
  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.finaltestmessage;
  }
  catch(ex){
    console.log(ex);
  }
  return data;
}



export const getSetting = async () =>
{
  let url = 'https://raw.githubusercontent.com/sirfreedom/TestSpainCitizen/main/test1.json';
  let res;
  let data = [];
  let tempdata = [];

  try 
  {
    res = await fetch(url);
    tempdata = await res.json().catch(err => console.log(err));
    data = tempdata.settings[0];
  }
  catch(ex){
    console.log(ex);
  }
  return data;
}

export const getQuestions = async (id,questionlen) => 
{
  let url = 'https://raw.githubusercontent.com/sirfreedom/TestSpainCitizen/main/test1.json';
  let res;
  let data = [];
  let tempdata = [];

  let lIndex = [];
  let lQuestion = [];
  try {
  res = await fetch(url);
  tempdata = await res.json().catch(err => console.log(err));

  if (id === 0){
    data = tempdata.questions;
  }

  if (id > 0 ){
    data = tempdata.questions.filter(x => x.level === id);    
  }

  while (lIndex.length <= questionlen) 
  {
    let n;
    n = Math.floor(Math.random() * (data.length - 0 + 1));
 
    if (lIndex.indexOf(n) === -1 )
    {
       lIndex.push(n);
    }
  }

  for (let i in lIndex) {
    lQuestion.push(data[lIndex[i]]);
  }

  }
  catch(ex){
    console.log(ex);
  }
  return lQuestion;
}





