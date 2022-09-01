import './cards.css';
import img from'./monitor.png';


const Cards = () => {
   
    return(
<>
<div>
   <div className='product_block'>
   <div><img className='product'src={img} alt='alt'/></div>
   <h2>Monitor</h2>
   <div className='pricetag'>From $150</div>
   <div className='brand'>Dell,Samsung,Sony..etc</div>
   </div>
</div>

</>
    )
} 
export default Cards;