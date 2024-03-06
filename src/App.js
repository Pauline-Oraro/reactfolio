
import './App.css';
import { Text } from './text';
import Marquee from "react-fast-marquee";
import { Data } from './data';

function App() {
  return (
    <div>
      {/* header section */} 
      
      <div className='header'>

        <div className='logo'>
          <a href='/'>
            <h1>REACTFOLIO</h1>
          </a>
        </div>

        <input className='side-menu' type='checkbox' id="side-menu" name='menu' />
        <label htmlFor='side-menu' className='hamb'>
          <span className='hamb-line'></span>
        </label>

        <nav className='nav'>
          <ul className='menu'>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        <div class="contactContainer">
          <h2>CONTACT</h2>
        </div>

      </div>



      {/* Homepage section */}
      <div className='home-container'>
        <div className='welcome-text'>
          <h1>👋, MY NAME IS REX</h1>
          <Text />
          <p>Based in Nairobi, Kenya</p>
          <button>
              <a href="#contact">LET'S START</a>
          </button>
        </div>

        <div className='home-image'>
          <img src='girl2.jpg' alt='a girl' />
        </div>

      </div>

      <div className="companies">
        <Marquee 
            gradient={false}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            autoFill={false}
            direction='left'
            >
              {Data.map((text) => (
                <p className='company-text'>{text}</p>
              ))}
            </Marquee>
      </div>

      <div className="home-information">

        <div className='info-image'>
          <img src='girl1.jpg' alt="a girl" />
        </div>

        <div className='info-container'>
          <h3>I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
          <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from Nairobi, Kenya. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>

          <div className='projects'>
            <p>500+</p>
            <span>Projects completed</span>
          </div>
          <div className='clients'>
            <p>200+</p>
            <span>Happy clients</span>
          </div>

          <div className='info-buttons'>
            <button>
            <a href="#contact">CONTACT</a>
            </button>
            <button>
            <a href="#portfolio">PORTFOLIO</a>
            </button>
          </div>

        </div>

      </div>



{/* services container */}
        <div className='service-container'>
          <h1>MY SERVICES</h1>

          <div className='services'>

            <div className='service-card'>
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='service-card'>
              <h4>Javascript Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='service-card'>
              <h4>S.E.O Optimization</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='service-card'>
              <h4>Code Quality and Testing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='service-card'>
              <h4>Web Content Writing Creation</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='service-card'>
              <h4>Cross-Browser Compatibility</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
