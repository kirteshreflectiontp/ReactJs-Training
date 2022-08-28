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
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'

    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image1',
        title:'product 1',
        desc:'Product test',
        price:'Rs.5000'
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
            <Data productImg={value.productImg} title={value.title} desc={value.desc}  price={value.price}/>
        ))}
        </>
    );
};
export default UpdateTxt;
