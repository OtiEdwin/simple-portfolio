import './Header.css';
import React from 'react';


const iiiBar = ({dropdown, style})=>{
    return(
    <div onClick={()=>dropdown()} className="togg" style={style}>
        <div className="toggler"></div>
    </div>
    )
    
}
export default iiiBar