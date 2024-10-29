import React,{useEffect,useState } from 'react';
import './App.css';
import axios  from 'axios';
import Header from "./component/header";
import Footer from "./component/footer";
import Content from './component/content';
 import { BrowserRouter} from "react-router-dom";



function App() {
  function selectData(){
    axios.post('/test',["가","나","다"])
    .then(function(res){
        console.log(res)
    });
}
  useEffect(()=> {
    
    selectData();
  },[]);

  return (

    <div className="App">
      <Header className='Header'></Header>
       <Content className='Content'></Content>
      <Footer className='Footer'></Footer>

     
    </div>
  );
}

export default App;
