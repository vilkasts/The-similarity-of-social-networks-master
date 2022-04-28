import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({ dialogData, messageData, postsData }) {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Profile/*" element={<Profile postsData={postsData}/>}/>
        <Route path="/Dialogs/*" element={<Dialogs dialogData={dialogData} messageData={messageData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
