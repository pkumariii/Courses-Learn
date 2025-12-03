import React from "react";

const ContactForm = () => {
  return (
    <div className="glass-card contact-form">
      <h2>Send us a message</h2>
      <p>Tell us what you need help with so we can respond effectively.</p>

      <label>Full name</label>
      <input type="text" placeholder="Enter your name" />

      <label>Email</label>
      <input type="email" placeholder="you@example.com" />

      <label>Topic</label>
      <input type="text" placeholder="Billing, Course access, Partnerships" />

      <label>Message</label>
      <textarea rows="5" placeholder="Write your message here..." />

      <label>Attachments or links</label>
      <input type="file" />

      <button className="primary-btn">Submit message</button>

      <p className="note">Average response time: 24 hours, Mon–Fri.</p>
    </div>
  );
};

export default ContactForm;
