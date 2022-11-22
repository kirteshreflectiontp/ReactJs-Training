import "./Projectcard.css";
import React from 'react'
import { NavLink } from "react-router-dom";
const Cardprops = (props) => {
  return (
    <div className="p-card">
    <img src={props.imgsrc} alt="img"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="p-btn">
    <NavLink to ="https://www.youtube.com/watch?v=0h2b4ftbZcU&t=7776s" className="btn">View</NavLink>
    <NavLink to ={props.source} className="btn">Source</NavLink>
        </div>
    </div>
           </div>
  )
}

export default Cardprops