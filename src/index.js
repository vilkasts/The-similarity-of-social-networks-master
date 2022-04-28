import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

let dialogData = [
    {id: 1, name: 'Kolyunya'},
    {id: 2, name: 'Vitechka'},
    {id: 3, name: 'Alesyundra'},
    {id: 4, name: 'Nikitiy'},
    {id: 5, name: 'Egoriy'},
    {id: 6, name: 'Alkashiy'},
    {id: 7, name: 'Valeriy'}
];

let messageData = [
    {id: 1, message: 'Gamarjoba'},
    {id: 2, message: 'Ho'},
    {id: 3, message: 'Genacvale'}
];

let postsData = [
    {id: 1, message: "Hi, how are you?"},
    {id: 2, message: "It's, my first post?"}
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogData={dialogData}
           messageData={messageData}
           postsData={postsData}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


