import axios from 'axios';
import styled from 'styled-components';
import React,{Component} from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DownloadLink from "react-download-link";

import '../../index.js';
import { Container, Row, Col } from 'react-grid';
import SmoothList from 'react-smooth-list';


import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

import picture from '../lataus.jpg'
import {Button} from '../VideoComponent.js';
const home = () => {
  function Text() {
    return(
    <div>
    <h1
    style={{
      display: "flex",
      color:"white",
      alignItems: "center",
      justifyContent: "center",  


    }}>

     Video Summarization service</h1>
     <p
       style={{
        display: "flex",
        color:"white",


        alignItems: "center",
        justifyContent: "center",  

      }} >Repair your video and upload it to our server. Let we handle with the service.</p>

<p
       style={{
        display: "flex",
        color:"white",


        alignItems: "center",
        justifyContent: "center",  

      }} > Take your time to wait for our notification and download the final result.</p>


        <div>
        <Navigation />
          
        </div> 
      

     </div>
    )
  }

 
  var rootStyle = {
    backgroundColor : 'black',
    color : 'black',
    height : '100vh',
  }





 

  return (
    //<img src={beerImage} /> 
          <div style={rootStyle}>
    

    
          <Row  style={{
            display: "flex",
            color:"white",
    
    
            alignItems: "left",
            justifyContent: "left",  
    
          }}>R Video summarization project  </Row>
    
          <div class="wrapper">
          <Col className="colp"  style={{
            display: "flex",
            color:"white",
    
    
            alignItems: "center",
            justifyContent: "center",  
    
          }}> <img src={picture} width="300px" height="700px"/> </Col>
          <Col className="col"style={{
            display: "flex",
            color:"white",
    
    
            alignItems: "center",
            justifyContent: "center",  
    
          }}>{Text()}</Col>
           </div>
    
          
    </div>
    
    
    
        );
  
}

export default home;