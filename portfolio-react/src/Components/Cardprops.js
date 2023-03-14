import "./Projectcard.css";
import React from 'react'
const Cardprops = (props) => {
  return (
    <div className="p-card">
    <img src={props.imgsrc} alt="img"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="p-btn">
    <a href={props.view} className="btn">View</a>
    <a href ={props.source} className="btn">Source</a>
        </div>
    </div>
           </div>
  )
}

export default Cardprops