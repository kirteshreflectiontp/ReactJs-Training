import "./Projectcard.css";
import React from 'react'
import Cardprops from "./Cardprops";
import Carddata from "./Carddata";

const Projectcard = () => {
  return (
    <div className="projectcard">
        <h1 className="project-heading">Projects</h1>
        <div className="project-div">
      {Carddata.map((val,ind)=>{
        return(
          <Cardprops
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          source={val.source}
          />
        )
      })}

       </div>
    </div>
  )
}

export default Projectcard