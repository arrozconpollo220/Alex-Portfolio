// importing css file from the styles folder
import '../styles/contact.css';

// importing useState from React
import { useState, useEffect } from 'react';

// importing helper function for email validation from utils folder
import { validateEmail } from '../utils/helpers';

function Form() {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  // State variables for error messages
  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    message: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const { email, fullName, message } = JSON.parse(savedData);
      setEmail(email || '');
      setFullName(fullName || '');
      setMessage(message || '');
    }
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update state based on input field
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // Handle input blur (when the field loses focus)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Check if the field is empty and set error message
    if (!value.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: 'This field is required' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      email: validateEmail(email) ? '' : 'Please enter a valid email address.',
      fullName: fullName.trim() ? '' : 'Full name is required.',
      message: message.trim() ? '' : 'Message is required.'
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    // Save data to localStorage
    const formData = { email, fullName, message };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Proceed with form submission (e.g., sending data to a server or displaying a confirmation)
    alert(`Hello ${fullName}. Your email is ${email}. Your message is ${message}`);

    // Clear form fields
    setEmail('');
    setFullName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <div>
        <h1>Contact Me.</h1>
        <p>Feel free to reach out to me with any questions or comments. I will get back to you as soon as possible.</p>
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
