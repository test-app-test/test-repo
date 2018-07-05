import React, { Component } from 'react';
import Header from "./components/header";
import ListOfUsers from "./components/list-of-users";
import TextArea from "./components/text-area";
import Button from "./components/button";

import './App.css';

const listUsers = [
  {
    name:'Bogdan',
    age:27
  },
  {
    name:'Vova',
    age:23
  },
  {
    name:'Andrew',
    age:40
  }
];




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header tittle="Header of menu"
         txt1="about"
         txt2="contact"
         txt3="tel"/>
        <hr />
        <ListOfUsers items={listUsers} />
        <hr />

        <TextArea />
        <hr />
        <Button />
     </div>
    );
  }
}

export default App;
