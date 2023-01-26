import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mdb from './Mdb';
import Object from './Object';
import Cards from './Cards';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Mdb/>
    <Routes>
      <Route path="/Object" element={<Object/>}/>
      <Route path="/Cards" element={<Cards/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
