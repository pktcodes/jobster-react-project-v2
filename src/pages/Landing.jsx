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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            quisquam eius mollitia unde rerum iste nisi ad voluptates ducimus
            nostrum.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={heroImage} alt="Hero Image" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
