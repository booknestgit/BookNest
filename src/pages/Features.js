import React  from 'react';

const Features = () => {
    return(
    <div className='features'>
        <h1>Our Features</h1>
        <p>Explore what you can do with BookNest.</p>

    <div className="features-list">

    <div className="feature-card">
      <h3>Browse Books</h3>
      <p>Explore our collection of books with their images and prices.</p>
    </div>

    <div className="feature-card">
      <h3>Explore Categories</h3>
      <p>Find books easily by choosing your favorite category.</p>
    </div>

    <div className="feature-card">
      <h3>Read Book Details</h3>
      <p>Discover more information about each book.</p>
    </div>

    <div className="feature-card">
      <h3>Easy Shopping</h3>
      <p>Add your favorite books to your cart and view their details anytime.</p>
    </div>

  </div>
</div>
    );
}
export default Features;