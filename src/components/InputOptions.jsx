import React from "react";
import  "../css/inputoptions.css";

function InputOptions({title,Icon,color}){
    return(
        <div className='inputoption'>
            <Icon style={{color:color}}></Icon>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions