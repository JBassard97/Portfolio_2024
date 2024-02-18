import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

export default function ContactForm() {
  // State of form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State of form submitting (and sending email)
  const [sendStatus, setSendStatus] = useState("");

  const [errorStatus, setErrorStatus] = useState("Please fill all fields");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setErrorStatus("Please fill all fields");
    } else {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorStatus("Use a valid email!");
      } else {
        setErrorStatus("Good to go!");
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        // Service ID
        "service_7o9ir8w",
        // Template ID
        "template_kwaeh3j",
        formData,
        // Public ID
        "WuS-IOkqNsunWpqPU"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSendStatus("Successfully sent!");
        setErrorStatus("");
        // reset the form fields here
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setSendStatus("Unable to send!");
      });
  };

  return (
    <div className="contact-form">
      <p className="header">Contact Me</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <p className="error-status">{errorStatus}</p>
        <button className="button-6"type="submit">Submit</button>
        <p className="send-status">{sendStatus}</p>
      </form>
    </div>
  );
}
