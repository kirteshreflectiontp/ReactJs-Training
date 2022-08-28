import React from 'react';

const Data = (props)=>{
    return(
        <div>
            <img src={props.productImage1}width='100px'/>
            <h2 style={{color:'red',fontsize:'35px'}}>{props.title}</h2>
            <p>{props.desc}</p>
            <div>{props.salery}</div>
        </div>
    );
};
export default Data;