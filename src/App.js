import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './componants/navbar/Navbar';
import Footer from './componants/footer/Footer';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes> 
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
