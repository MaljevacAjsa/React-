import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    checked: false,
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Please type in your full name";
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email field cannot be empty";
      } else if (!emailPattern.test(value)) {
        error = "Please enter a valid email (e.g. name@example.com)";
      }
    }

    if (name === "password" && value.length < 8) {
      error = "Password must have at least 8 characters";
    }

    if (name === "checked" && !value) {
      error = "You must agree to the terms and conditions";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setUser((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, val),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, user[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(user).forEach((key) => {
      const error = validateField(key, user[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
      checked: true,
    });

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem(`${Date.now()}`, JSON.stringify(user, null, 2));
      alert("Form submitted successfully!");
      setUser({
        name: "",
        email: "",
        password: "",
        checked: false,
      });
      setErrors({});
      setTouched({});
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h2>Register</h2>
        <div className="input_container">
          <input
            className={errors.name && touched.name ? "error-border" : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            value={user.name}
            type="text"
            name="name"
            placeholder="First And Last Name"
          />
          {touched.name && errors.name && (
            <div className="error_wrapper ">
              <p className="error">{errors.name}</p>
            </div>
          )}
        </div>

        <div className="input_container">
          <input
            className={errors.email && touched.email ? "error-border" : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            value={user.email}
            type="text"
            name="email"
            placeholder="Email"
          />
          {touched.email && errors.email && (
            <div className="error_wrapper ">
              <p className="error">{errors.email}</p>
            </div>
          )}
        </div>

        <div className="input_container">
          <input
            className={
              errors.password && touched.password ? "error-border" : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={user.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <div className="error_wrapper ">
              <p className="error">{errors.password}</p>
            </div>
          )}
        </div>

        <div className="input_container">
          <div className="checkbox-wrapper">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              checked={user.checked}
              type="checkbox"
              id="terms"
              name="checked"
            />
            <label htmlFor="terms">Agree to terms and conditions</label>
          </div>
          {touched.checked && errors.checked && (
            <div className="error_wrapper ">
              <p className="error">{errors.checked}</p>
            </div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
