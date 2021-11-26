import axios from 'axios';
import styled from 'styled-components';
import React,{Component} from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DownloadLink from "react-download-link";


import { Container, Row, Col } from 'react-grid';
import SmoothList from 'react-smooth-list';
import Home from './pages/Home';
import program from './pages/program.js';
import Navigation from './Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import rootStyle from './VideoComponent';
const Router = () => {
    return(
      <div style={rootStyle}>
        
      <BrowserRouter>
       <div>
       
          <Switch>

           
            <Route path="/" component={Home} exact/>
            <Route path="/editor" component={program}/>
           
          
          </Switch>
      </div> 
     </BrowserRouter>
    </div>
    )
  }


  export default Router;