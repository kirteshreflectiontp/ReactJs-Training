import React, { useState, useEffect } from 'react';
import './Loader.css';

 function Loader() {
    const [isSlow, setisSlow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setisSlow(true)
        }, 3000);
        return () => {
            setisSlow(false)
        }
    }, [])

    return (
        <div className='container' >
            <div className='loader'>
                <span></span>
                <span></span>
            </div>
            {isSlow && <h4>Slow internet detected!</h4>}
        </div>
    )
}
export default Loader