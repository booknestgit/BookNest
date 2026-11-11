import React, { useState, useContext } from 'react';
import { BookContext } from "../App";

const BookCard = (props) => {
 const [showDetails, setShowDetails] = useState(false);
 const [added, setAdded] = useState(false);

 const{ cart,setCart } = useContext(BookContext);

 const addToCart = () => {
       setCart([...cart, props]);
       setAdded(true);
 };
  return (
    <div className="book-card">

      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p>{props.author}</p>

      <h4>${props.price}</h4>
      
      <button className="btn" onClick={() => setShowDetails(!showDetails)}>Read More</button>
       {showDetails && <p>{props.description}</p>}
       <button className="btn" onClick={addToCart} style={{backgroundColor: added ? "#789b78" : "var(--primary-color"}}>Add To Cart</button>
    </div>
  );
}

export default BookCard;