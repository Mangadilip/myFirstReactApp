import React, { useState } from "react";
import "./FormExample.css";

import { ToastContainer, toast } from "react-toastify";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [newUserDetails, setNewUserDetails] = useState();

  const notify = (message) => toast(message);

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const userDetails = (e) => {
    e.preventDefault();

    // Manual validation
    if (!name || !email || !password || !cpassword) {
      notify("All fields are required!");
      return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Please enter a valid email address!");
      return;
    }

    if (password !== cpassword) {
      notify("Passwords do not match!");
      return;
    }
    

    setNewUserDetails({ name, email });
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
    notify("You have successfully submitted the form");
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1>Form</h1>
      <form action="">
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={getName}
        />
        <br />
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={getEmail}
        />
        <br />
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br />
        <label htmlFor="cpassword">CONFIRM PASSWORD:</label>
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          placeholder="Confirm your password"
        />
        <br />
        <button type="submit" onClick={userDetails}>
          Submit
        </button>
      </form>
      {newUserDetails && (
        <div>
          <h2 className="submitted-data">Name: {newUserDetails.name}</h2>
          <h2 className="submitted-data">Email: {newUserDetails.email}</h2> 
        </div>
      )}
    </div>
  );
};

export default FormExample;
