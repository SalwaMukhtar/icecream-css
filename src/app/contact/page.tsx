"use client"
// pages/contact.tsx
import { FormEvent, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="contactContainer">
      <Header />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
