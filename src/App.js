import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />S
      </Routes>
    </Router>
  );
}



export default App;
