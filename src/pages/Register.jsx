import { useState } from 'react';
import styled from 'styled-components';

import { Logo } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Wrapper className="full-page" onSubmit={handleSubmit}>
      <form className="form">
        <Logo />
        <h3>Register</h3>
        <div className="form-row">
          {/* NAME */}
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        {/* PASSWORD */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-input"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        {/* SUBMIT */}
        <button type="submit" className="btn btn-block">
          submit
        </button>

        {/* LINK */}
        <p>
          Already a member? <span className="member-btn">Login</span>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register;
