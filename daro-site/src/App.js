import './App.css';
import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './Home';
import Portfolio from './pages/Portfolio';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
