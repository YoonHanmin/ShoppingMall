import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import Header from "./component/header";

 import { BrowserRouter} from "react-router-dom";

function selectData(){
    axios.post('/test',["가","나","다"])
    .then(function(res){
        console.log(res)
    });
}

function App() {
  return (
  <>

    <div className="App">

      <Header></Header>
       
        <div>
            {<button onClick={()=>selectData()}>조회</button> }
        </div>

     
    </div>
    </>
  );
}

export default App;
