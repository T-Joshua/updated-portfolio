import React, { useState } from "react";

import "./HeaderStyles.css";

function Header() {
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validateAndSubmitForm = (e) => {
    e.preventDefault();

    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = "enter a correct email";
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      window.location = "mailto:t.joshua016@outlook.com";
    }
  };

  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };

  return (
    <div>
      <div className="content">
        <h4>Hello, my name is</h4>
        <h1>
          Taiwo <span>Joshua</span>
        </h1>
        <h3>I am a Web Developer.</h3>
        <div className="newsletter">
          <form onSubmit={validateAndSubmitForm}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={setEmail}
            />
            {""}
            <button>Let's Start</button>
          </form>
          {Object.entries(errors).map(([key, error]) => (
            <span
              key={`${key}: ${error}`}
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {key}: {error}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
