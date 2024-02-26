import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import heroImage from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      {/* NAVBAR */}
      <nav>
        <img src={logo} alt="Jobster Logo" className="logo" />
      </nav>

      {/* HERO */}
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Organize your job search with ease and efficiency. Whether you’re
            looking for a new job or a career change, this app helps you stay on
            top of your opportunities. Track your job applications, follow up
            with employers, and interviews.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        {/* IMAGE */}
        <img src={heroImage} alt="Hero Image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
