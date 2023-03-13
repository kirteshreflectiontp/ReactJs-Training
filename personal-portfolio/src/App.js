import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Space from './components/space/Space';
import NavComp from './components/Nav/Nav';
import Audio from './components/Audio/Audio';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 5000);
    return () => {
      setIsLoading(false)
    }

  }, [isLoading])



  return (
    isLoading ? (<Loader ></Loader>) : (<Fragment>
      <div className="App">
        <Space></Space>
        <div className="contentWrapper">
          <NavComp></NavComp>
          <Audio></Audio>
        </div>
      </div>
    </Fragment>)
  );
}



export default App;
