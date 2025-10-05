import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email service)
    try {
      // Here you would integrate with EmailJS, Formspree, or your backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-container">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? Let's talk!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="form-textarea"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === "success" && (
            <div className="status-message success">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="status-message error">
              ❌ Something went wrong. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

