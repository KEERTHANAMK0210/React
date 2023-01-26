import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Buttonclr from './Buttonclr';
import Spread from './Spread';
import Prox from './Prox';
import Sprd from './Sprd';
import Arr from './Arr';
import ImageCarousels from './ImageCarousels';
import Icon from './Icon';
import { Navbar, NavLink } from 'react-bootstrap';
import Navba from './Navba';
import Flip from './Flip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Flip/>
   
   
   
   
   
   
   
   
   
   
   
   
   
    <Buttonclr/>
    <Spread/>
    <Prox/>
    <Sprd/>
    <Arr/>
   
    {/* <Carousel1/> */}
    <ImageCarousels />
    <Icon/>
    <Navba/>
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
