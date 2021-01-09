import React from "react";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ekvh9ae",
        e.target,
        "user_sT2Mn9iU2DUPPpWtv5fSN"
      )
      .then(
        (result) => {
          console.log(result);
          history.push("/");
        },
        (error) => {
          console.log(error.text);
          history.push("/");
        }
      );
  };

  return (
    <div className="container mt-5">
      <h1 className="h5">Contact Form</h1>
      <br />

      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label className="lead">Name</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="lead">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="lead">Message</label>
          <textarea name="message" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary mr-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
