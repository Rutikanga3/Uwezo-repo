import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <section className="form-section">
      <h2>The 10th Year - Not just an Anniversary but a Festival</h2>
      <form className="form">
        <input type="text" placeholder="Full name" />
        <input type="tel" placeholder="Telephone number" />
        <input type="text" placeholder="Address" />
        <input type="email" placeholder="Email" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Form;
