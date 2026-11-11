import React from 'react';
import { useContext } from 'react';
import { BookContext } from "../App";

const Sidebar = () => {

  const { setSelectedCategory } = useContext(BookContext);
  return (
    <div className="sidebar">

      <h2>Categories</h2>

      <button 
      value='All Books'
      onClick={(e) => setSelectedCategory(e.target.value)}>All Books</button>
      <button 
      value='Fiction'
      onClick={(e) => setSelectedCategory(e.target.value)}>Fiction</button>
      <button 
      value='Romance' 
      onClick={(e) => setSelectedCategory(e.target.value)}>Romance</button>
      <button 
      value='Science' 
      onClick={(e) => setSelectedCategory(e.target.value)}>Science</button>
      <button 
      value='History' 
      onClick={(e) => setSelectedCategory(e.target.value)}>History</button>

    </div>
  );
}

export default Sidebar;