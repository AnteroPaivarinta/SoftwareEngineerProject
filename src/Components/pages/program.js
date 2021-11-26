import axios from 'axios';
import styled from 'styled-components';
import React,{Component} from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DownloadLink from "react-download-link";

import '../../index.js';
import { Container, Row, Col } from 'react-grid';
import SmoothList from 'react-smooth-list';


import NavigationBlack from '../Navigation/NavigationBlack';
import { NavLink } from 'react-router-dom';
import '../VideoComponent/Buttons/Button.css'
import picture from '../lataus.jpg'
import MyComponent from '../VideoComponent/Selectbox.js';
import upload from '../../Controller/onFileUpload.js';
import {length} from '../VideoComponent/Selectbox.js';
const Program = () => {


      
    const rootStyle = {
        backgroundColor : 'black',
        color : 'white',
        height : '100vh',
      }
    const [state, setState] = useState({
 
        // Initially, no file is selected
        selectedFile: null,
        checkedName:null,
        checkedValue:null,
        checked:false,
        fileByteArray:null,
        base64:null    
    });

   
    

    let onFileChange = e => {
        let x= new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        let base64 = x;
        setState({ selectedFile: e.target.files[0]});  
    };


    let fileData = () => {
        if (state.selectedFile) {
           console.log("Selected: ");
           console.log(state.selectedFile.name);
           console.log("SelectedType: ");
           console.log(state.selectedFile.type);
           if(state.selectedFile.type==="video/mp4"){
          return (
            <div>
              <h3 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              
              >File Details:</h3>
               
  
               <h3>
                <p  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>File Name: {state.selectedFile.name}</p>
   
               
                <p  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>File Type: {state.selectedFile.type}</p>
            
              </h3> 
  
              
            </div>
          
          );
        }
        else{
            console.log("TYYPPI: ", state.selectedFile.type);
            return(
            
            <h4 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>You have select .mp4 file</h4>
            )
        }
    }
}


    


 
  

return (
<div style={rootStyle}> 
    <div>
          
          <Row className="row2" style={{
   
      
    }}></Row>
        <h3 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            Online video summarization service
        </h3>
      <SmoothList delay="1300">
        <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        
        >
          Upload your file
        </h3>
        </SmoothList>

        

     
        
      

      

        <input id="filePicker" style={{visibility:"hidden"}} type="file" onChange={onFileChange}/>
        <div
         style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        
        >

          


            <SmoothList delay="1600"> 

            <label className="Label" htmlFor="filePicker" style={{ background:"black",  color: "white"}}>
            Select file(.mp4 only)
            </label>
            </SmoothList>
            <div
        
        
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >



      

        </div>
          

          


         
        </div>
      
       
    
       
    

        
        {fileData()}  
        
        
<h3  style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
}}> Choose before uploading     </h3>


        <SmoothList delay="1800">
<div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>    {MyComponent()} </div>
</SmoothList>
    


        <SmoothList delay="1800">
<div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}></div>
</SmoothList>

        <p
         style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>



          <SmoothList delay="1500"> 
            <button className="buttonBlack" onClick={() => upload(state.selectedFile, length())}>
                Upload!
            </button>

            </SmoothList>
          



          </p> 
                <p style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}> 
      
        
            <SmoothList delay="1700"> 

            <NavigationBlack/>
            

            </SmoothList> 

            </p> 
            
            
    <div>
   
     
    </div> 
 
          
        

      

    </div>
</div> 
  );
    }

    export default Program;