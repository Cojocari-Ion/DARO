import './App.css';
import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ItemPage from './pages/itemPage/ItemPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Svg from './Svg';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Svg />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path ='/projects/:id' element={<ProjectPage/>} />
          <Route path='/project/:id' element={<ItemPage /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
