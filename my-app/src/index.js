import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ab from './Ab';
import Mdb from './Mdb';
import Array from './Array';
import States from './States';
import Incremwnt from './Incremwnt';
import Ternary from './Ternary';
import Ter from './Ter';
import Dummy from './Dummy';
import Useeffect from './Useeffect';
import Userprovider from './Context/Userprovider';
import A from './A';
import C from './C';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Userprovider>
  <React.StrictMode>
    
    <App />
    <Ab/>
    <A/>
    <C/>
  <Array/>

  <Incremwnt/>

  <States/>
  <Ternary/>
  <Ter/>
  <Dummy/>
  <Useeffect/>
  
  </React.StrictMode>
  </Userprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
