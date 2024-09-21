// src/FormValidation.jsx
import React, { useState } from 'react';
import './FormValidation.css'; // Import CSS for styling

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};
    let isValid = true;

    // Validate name
    if (formData.name.trim() === '') {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate subject
    if (formData.subject.trim() === '') {
      formErrors.subject = 'Subject is required';
      isValid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      setFormSubmitted(true);
      // Handle form submission here
      console.log('Form submitted successfully:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
        {formSubmitted && <p className="success">Form submitted successfully!</p>}
      </form>
    </div>
  );
};

export default FormValidation;
