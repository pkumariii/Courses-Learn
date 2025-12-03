import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHelpfulLinks from "./ContactHelpfulLinks";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHeader />

      <div className="contact-layout">
        <ContactForm />

        <div className="right-side">
          <ContactInfo />
          <ContactHelpfulLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
