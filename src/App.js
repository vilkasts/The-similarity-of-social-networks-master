import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App({ store }) {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Profile/*" element={<Profile store = {store}/>}/>
        <Route path="/Dialogs/*" element={<DialogsContainer store={store}/>}/>
      </Routes>
    </div>
  );
}

export default App;
