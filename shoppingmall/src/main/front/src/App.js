import React,{useEffect,useState } from 'react';
import './App.css';
import axios  from 'axios';
import Header from "./component/header";
import Footer from "./component/footer";
import Content from './component/content';
import LoginPage from './component/loginPage';
import Sell from './component/sell';
import RegisterPage from './component/RegisterPage';
 import { BrowserRouter as Router, Route, Routes, useNavigate,useLocation } from "react-router-dom";
import MainPage from './component/mainPage';



function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div className="App">
      <Header className='Header' />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/purchase" element={<Content />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      {/* 현재 경로가 '/login'이 아닐 때만 Footer를 표시 */}
      {location.pathname !== '/login' && <Footer className='Footer' />}
    </div>
  );
}

export default App;