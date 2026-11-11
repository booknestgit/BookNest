import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import Sidebar from "../components/Sidebar";
import { BookContext } from "../App";
import gatsby from "../assets/gatsby.jpg";
import atomic from "../assets/atomic.jpg";
import harry from "../assets/harry.jpg";
import romance from "../assets/romance.jpg";
import history from "../assets/history.jpg";

const books = [
    {id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 15, 
    image: gatsby,
    category: "Fiction",
    description: 'A story about love, dreams, wealth, and the American Dream'},
    {id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 20,
    image: atomic,
    category: "Science",
    description: "A practical guide to building good habits and breaking bad ones."},
    {id: 3,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 18, 
    image: harry,
    category: "Fiction",
    description: "A young wizard discovers a magical world full of adventures and mysteries."},
    {id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 17,
    image: romance,
    category: "Romance",
    description: "A classic love story about Elizabeth Bennet and Mr. Darcy."},
    {id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 22,
    image: history,
    category: "History",
    description: "An exploration of human history and how humans developed over time."}
];
const Books = () => {

 const { selectedCategory } = useContext(BookContext);

 let displayedBooks = books;
 if(selectedCategory === 'Fiction'){
   displayedBooks = [books[0], books[2]];
 }
  if(selectedCategory === 'Science'){
   displayedBooks = [books[1]];
 }
 if(selectedCategory === 'Romance'){
   displayedBooks = [books[3]];
 }
 if(selectedCategory === 'History'){
   displayedBooks = [books[4]];
 }
return(
    <div className="books-page">
      <Sidebar />
      <div className="books-container">
        {displayedBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
}
export default Books;

