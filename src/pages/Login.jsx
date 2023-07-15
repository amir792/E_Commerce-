import React from 'react'
import { useRef, useState } from "react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (hasErros(email, password)) {
        } else {
          setEmail("");
          setPassword("");
          console.log({ email, password });
          emailRef.current.focus();
        }
      };
    
      const hasErros = (email, password) => {
        const errors = {};
        if (
          !email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
        ) {
          errors.email = "your eamil must be valid";
        }
        if (password.length < 8) {
          errors.password = "your pass must be more than 8 chars";
        }
        setError(errors);
        return Object.keys(errors).length;
      };
    
      return (
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={handleEmail}
                    ref={emailRef}
                  />
                  {error?.email && (
                    <div id="emailHelp" className="form-text text-danger">
                      {error?.email}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={handlePassword}
                  />
                  {error?.password && (
                    <div id="emailHelp" className="form-text text-danger">
                      {error?.password}
                    </div>
                  )}
                </div>
    
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  
}
