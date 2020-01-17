import React from "react";
import "./search-box.styles.css";
{/*Lifting state up: levantando el estado*/}
export const SearchBox = ({placeholder,handleChange}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={ handleChange}
      
        /> 
          
    
    
)