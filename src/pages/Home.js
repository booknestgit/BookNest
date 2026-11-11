import React from 'react';
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";

const Home = () => {
    return(
    <div className="home">
        <div className="hero-content">
        <h1>Welcome to BookNest!</h1>
        <h2>Discover your next favorite book.</h2>
        <p>Explore our collection and find your favorite books.</p>
        <Link to="/books" className="btn">Explore Books</Link>
        </div>
        <div className="hero-image">
            <img src={home} alt="Books"/>
            </div>
            <div className="featured-section">
                <h2>Featured Books</h2>
                <p>Explore some of our favorite books.</p>
                <Link to="/about" className='btn'>Learn More</Link>
        </div>
     


    </div>
    );
}
export default Home;
