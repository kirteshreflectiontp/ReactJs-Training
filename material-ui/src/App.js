import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Header from  './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
