import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Button } from './Button';



const elem = <div>
  <h2>aleykum</h2>
  <input type='text'></input>
  <button></button>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <>{elem}</>
    <Button/>
  </React.StrictMode>
);


