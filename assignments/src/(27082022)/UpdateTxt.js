import React,{useState} from 'react';
import Data from './data';



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
        productImg:'productImg',
        title:'Product 1',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image',
        title:'Product 2',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image',
        title:'Product 3',
        desc:'Product test',
        price:'Rs.5000'

    },
    {
        productImg:'image',
        title:'Product 4',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image',
        title:'Product 5',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image',
        title:'Product 6',
        desc:'Product test',
        price:'Rs.5000'
    },
    {
        productImg:'image',
        title:'Product 7',
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
