import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
