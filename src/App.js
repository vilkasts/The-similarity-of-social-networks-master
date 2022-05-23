import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Profile/*" element={ <Profile /> }/>
        <Route path="/Dialogs/*" element={ <DialogsContainer /> }/>
        <Route path="/Users/*" element={ <UsersContainer /> }/>
      </Routes>
    </div>
  );
}

export default App;