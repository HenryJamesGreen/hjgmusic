/* eslint-disable */
import React from "react";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
<div
  className="container"
  style={{
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Set background color to black
    minHeight: "100vh", // Ensure full viewport height
    padding: "0px", // Add padding to all sides
    textAlign: "center", // Align the text to the center
    marginBottom: "4px"
  }}
>
      <header className="App-header">
        <ContactForm />
      </header>
    </div>
  );
}

export default Contact;
