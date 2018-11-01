import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    function successCallback()
    {
        if (this.readyState === 4 && this.status === 200) 
        //alert("##res:"+this.responseText);
        var result=JSON.parse(this.responseText);
        var resObj={
    "availabletime":"11:00-15:30",
    "category":"Chinese Combos",
    "description":"",
    "name":"Egg Chinese Combo",
    "price":100,
    "vegflag":"nonveg"
     };
     var categories={};
     for(var i=0;i<result.length;i++)
     {
         if(!categories.hasOwnProperty(result[i].category))
         {
             categories[result[i].category]=[];
         }
         categories[result[i].category].push(result[i]);
         console.log(result[i].category+"##"+categories[result[i].category].length);
     }
    }
    function getRecords()
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = successCallback;
        xhttp.open("GET", "https://thesmartq.firebaseio.com/menu.json", true);
        xhttp.send();
        
    }
    //getRecords();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
