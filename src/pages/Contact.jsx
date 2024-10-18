
// importing css file from the styles folder
import '../styles/contact.css';

// importing emoji photo
import emoji3 from '../assets/MyEmoji_20240906_180557_0.png';

// importing useState, useRef from React
import { useState, useRef } from 'react';

// importing helper function for email validation from utils folder
import { validateEmail } from '../utils/helpers';

// importing emailjs for email service
import emailjs from '@emailjs/browser';

function ContactUs() {
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

  // Ref for the form element (used for emailjs)
  const form = useRef();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value); // Make sure state updates
    } else if (name === 'fullName') {
      setFullName(value); // Make sure state updates
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // Handle input blur (when the field loses focus)
  const handleBlur = (e) => {
    const { name, value } = e.target;

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

    // Send the email using emailjs
    emailjs
      .sendForm('service_wpho2gf', 'template_xrga1vs', form.current, 'ZB4difRsgRgAQKiWH')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    // Clear form fields after submission
    setEmail('');
    setFullName('');
    setMessage('');
  };

  return (
    <form ref={form} onSubmit={handleFormSubmit} className="contact-form">
      <div className='contact'>
        <h1>Contact Me.</h1>
        <p>Feel free to reach out to me with any questions or comments. I will get back to you as soon as possible.</p>
        <img src={emoji3} alt="emoji of Alex" />
      </div>
      <container className='forms'>
        <div className="form-group">
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleInputChange} // Ensure state is updated on input
            onBlur={handleBlur}
            required
            placeholder='Name'
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
            onChange={handleInputChange} // Ensure state is updated on input
            onBlur={handleBlur}
            required
            placeholder='Email'
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange} // Ensure state is updated on input
            onBlur={handleBlur}
            required
            placeholder='Message'
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </container>
    </form>
  );
}

export default ContactUs;


