import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Csc from './components/Csc';
import Mech from './components/Csc';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  let result=0;
  function numberCallBack(x,y){
    setX(x);
    setY(y);
  }
  const[z, updateReset] = useState(1);
  function reset(data){
    if(data == 1){
      setX(0);
      setY(0);
      updateReset(0);
    } else{
      updateReset(1);
    }
    
  }
  function headerCallBack(data){
    if(data == 1){
      let sum = parseInt(x) + parseInt(y);
      updateResult(sum);
    }
    if(data == 2){
      let mul = parseInt(x) * parseInt(y);
      updateResult(mul);
    }
    if(data == 3){
      let sub = parseInt(x) - parseInt(y);
      updateResult(sub);
    }
  }
  const[x,setX] = useState(0);
  const[y,setY] = useState(0);
  const[rel,updateResult] = useState(result);
  return(
    <div>
      <Header getFunction={headerCallBack}></Header>
      <Dashboard getNumbers={numberCallBack} x={x} y={y} z={z}></Dashboard>
      <Footer result={rel} reset={reset}></Footer>
    </div>
  );
}

export default App;
