import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Cart from "./pages/Cart";

import './App.css';

export const BookContext = createContext();

const App = () => {
  const[cart, setCart]= useState([]);
  const[selectedCategory, setSelectedCategory] = useState("All Books");
  return(
    <BookContext.Provider value={{cart, setCart, selectedCategory, setSelectedCategory}} >
    <BrowserRouter>
  <div className="App">
  <Navbar />
  <div className="container page-section">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/features" element={<Features />} />
       <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
   <Footer />
</div>
</BrowserRouter>
</BookContext.Provider>

  );
}
export default App;