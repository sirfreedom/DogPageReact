
export const getQuestionLevels = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/QuestionLevel?IdDependency=1';
  let response;
  let data = [];
  let tempdata = [];
  try 
  {
    response = await fetch(url);
    tempdata = await response.json().catch(err => console.log(err));
    data = tempdata.questionlevels;
  }
  catch(ex){
    console.error('Error en get QuestionLevel',ex);
  }
  return data;
}


export const getMessagesFinalTest = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/FinalTestMessage?IdDependency=1';
  let response;
  let data = [];
  let tempdata = [];
  try 
  {
    response = await fetch(url);
    tempdata = await response.json().catch(err => console.log(err));
    data = tempdata.finaltestmessage;
  }
  catch(ex){
    console.error('Error en getMessageFinal',ex);
  }
  return data;
}

export const getSetting = async () =>
{
  let url = 'https://sirfreedom.somee.com/api/Setting?IdDependency=1';
  let response;
  let data = [];
  let tempdata = [];
  try 
  {
    response = await fetch(url);
    tempdata = await response.json().catch(err => console.log(err));
    data = tempdata.setting;
  }
  catch(ex){
    console.error('Error en getSetting',ex);
  }
  return data;
}


export const getQuestions = async (codlevel) => 
{
  let url = 'https://sirfreedom.somee.com/api/Question?IdDependency=1&CodLevel='+ codlevel;
  let response;
  let data = [];
  let tempdata = [];
  try {
  response = await fetch(url);
  tempdata = await response.json().catch(err => console.log(err));
  data = tempdata.questions; 
  }
  catch(ex){
    console.error('Error en getQuestion',ex);
  }
  return data;
}


export const getJasoWebToken = async (user, pass) => 
{
  let data = [];
  let token = '';
  let response;
  try 
  {
      response = await fetch('https://sirfreedom.somee.com/Account/login', {
      method: 'POST',
      headers: 
      {
          'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user,
        pass: pass,
      }),
    });

    if (response.status == 200)
    {
      data = await response.json();
      token = data.jwtToken;
    }

  } catch (ex) 
  {
    console.error('Error en getQuestion',ex);
  }
  return token;
}


export const getCredencials = async (token) => 
  {
    let data;
    try 
    {
      data = await fetch('https://sirfreedom.somee.com/api/Values/jwt', 
      {
        headers: { Authorization: 'Bearer ' + token }
      }).then(response => 
      {
        if (response.status != 200) 
        {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });

    } 
    catch (ex) 
    {
      console.error('Error en getQuestion',ex);
    }
    return data;
  }
