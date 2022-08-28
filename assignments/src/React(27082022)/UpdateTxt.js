import React,{useState} from 'react';
import Data from './data'


const UpdateTxt = () => {
    const [ name, setName] = useState('');
    const [ show, setShow ] = useState(false);
    const updateContent = (event) => {
        setName(event.target.value)
    }
    const showContent =()=> {
        setShow(!show)
    }
    const data = [{
        title:'product 1',
        desc:'Product test',
    },
    {
        title:'product 1',
        desc:'Product test',
    },
    {
        title:'product 1',
        desc:'Product test',
    },
]
    return(
        <>
        <div>
            <input type ="text" placeholder='Search' onChange ={(event)=> updateContent(event)}/>
            <div>{name}</div>
            <button onClick={()=> showContent()}>PUSH</button>
            {show && <div>You have just clicked the PUSH Button</div>}
        </div>
        {data.map((value)=>(
            <Data title={value.title} desc={value.desc}/>
        ))}
        </>
    );
};
export default UpdateTxt;
