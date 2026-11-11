import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setSuccess('Please fill in all fields.');
      return;
    }

    setSuccess('Your message has been submitted successfully!');

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <p>Have a question? We would love to hear from you!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" className='btn'>Send Message</button>
      </form>

      <p className='success-message'>{success}</p>
    </div>
  );
}

export default Contact;