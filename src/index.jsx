import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import { App, About, Team, Contact } from './pages';
import { Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
      <Routes>
        <Route path="/*" element={ <App/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/team" element={ <Team/> }></Route>
        <Route path="/Contact" element={ <Contact/> }></Route>
      </Routes>
  </BrowserRouter>
);
