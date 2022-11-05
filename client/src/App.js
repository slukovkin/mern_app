import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Post from "./components/Post/Post";
import Warn from "./components/Warn/Warn";
import Contacts from "./components/Contacts/Contacts"

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/warn" element={<Warn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
