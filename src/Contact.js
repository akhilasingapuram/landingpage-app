import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="container">
      <h2>Contact Us</h2>
      <p>
        Do you have any questions or queries, Please feel free to contact us:
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1(123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </div>
    </Container>
  );
};
export default Contact;
