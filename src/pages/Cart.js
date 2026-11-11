import React, { useContext } from "react";
import { BookContext } from "../App";

const Cart = () => {
  const { cart } = useContext(BookContext);

  return (
    <div className="cart-page">
      <h1>Your Reading Basket</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((book, index) => (
          <div className="cart-item" key={index}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Price: ${book.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;