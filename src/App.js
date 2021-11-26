import logo from './logo.svg';
import './App.css';
import  {Router} from './Components/VideoContainer.js';
import home from './Components/pages/Home';
import {add} from './test.js'
import { render } from '@testing-library/react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
//
//

function App() {
  
  const [currentTime, setCurrentTime] = useState(0);
  var rootStyle = {
    backgroundColor : 'black',
    color : 'black',
    height : '100vh',
  }

  
  
  return (
      <div>{Router()}</div>
  );

}


export default App;
 