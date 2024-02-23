import logo from '../assets/images/logo.svg';
import heroImage from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Jobster Logo" />
      </nav>
      <div className="container page">
        {/* Info */}
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

        <img src={heroImage} alt="Hero Image" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
