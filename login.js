import React, { useEffect, useState, useHistory } from "react";
import "../App.css";
import validation from "./valid_login";

function Login () {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [errors, setError] = useState({})

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

 

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
    console.log(values);
    
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && (values.username !== "" && values.password !== "")) {
      alert("Form Submitted");
    }
  }, [errors])

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} action="">
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Login</button>
          <p>Forgot Password </p>
        </form>
      </header>
    </div>
  );
};
export default Login;
