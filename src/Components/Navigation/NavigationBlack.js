import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {


   const Button = styled.button`
   background-color: black;
   color: white;
   font-size: 20px;
   padding: 10px 60px;
   border-radius: 5px;
   margin: 8px 0px;
   cursor: pointer;
   border-style: solid;
 `;
    return (
       <div>
       
        <Button> <NavLink to="/">Home</NavLink> </Button>
        
          
       </div>
    );
}
 
export default Navigation;