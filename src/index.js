import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//react17
//import ReactDOM from 'react-dom';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 


//react17
//ReactDOM.render( <App />,  document.getElementById('root') );


root.render( <React.StrictMode> <App /> </React.StrictMode> );



reportWebVitals();


