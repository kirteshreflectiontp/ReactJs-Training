import React from 'react';

import Header from '../header'
import Main from '../main'


const Home = (props) => {
    props.setInitialPage('Home');
   
    return (
        <div>
           <Header/>
           <Main/>
        </div>
    );
};

export default Home;