import React from 'react';

const Data = (props)=>{
    return(
        <div>
            <img src={props.productImg}width='100px'/>
            <h2 style={{fontsize:'35px'}}>{props.title}</h2>
            <p>{props.desc}</p>
            <div>{props.price}</div>
        </div>
    );
};
export default Data;