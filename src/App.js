import React from 'react';
import './App.css';
import Header from './components/Header';
import Anniversary from './components/Anniversary';
import Vision from './components/Vision';
import Form from './components/Form';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Anniversary />
      <Vision />
      <Form />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default App;
