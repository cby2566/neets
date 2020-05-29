import React from 'react';
import logo from './logo.svg';
import './App.css';

import LsComp from './components/listComponents.js';



function App() {
  let x = 12;
  let user = {
    name: '沙赞',
    age: 14
  }
  function upname2(){
    user.name = '贝尔'
    console.log(user.name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMessage names={user.name}/>
        <span>{x}</span>
        <input type="button" value="update!" onClick={upname2}></input>
        <LsComp userInfo={user} />
      </header>
    </div>
  );
}
function HelloMessage(props) {
  return <h1>Hello World! {props.names}</h1>;
}
export default App;
