/* eslint-disable */
import React from "react";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Set background color to black
        minHeight: "100vh", // Ensure full viewport height
        padding: "20px", // Add padding for better spacing
      }}
    >
      <header className="App-header">
        <ContactForm />
      </header>
    </div>
  );
}

export default Contact;
