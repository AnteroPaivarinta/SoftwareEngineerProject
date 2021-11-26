import React from 'react';

import { NavLink } from 'react-router-dom';
//import {Button} from '../VideoComponent/Buttons/RedButton.js';
import '../VideoComponent/Buttons/Button.css';
const Navigation = () => {


  
    return (
       <div>
       
         <button className="buttonRed"><NavLink to="/">Home</NavLink></button>
         <button className="buttonRed"><NavLink to="/editor">To edit your video</NavLink></button>
          
       </div>
    );
}
 
export default Navigation;