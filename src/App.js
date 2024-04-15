
import './App.css';
import { Text } from './text';
import Marquee from "react-fast-marquee";
import { Data } from './data';
import Popup from 'reactjs-popup';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
                <ul className='company-text'>
                  <li>{text}</li>
                </ul>
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

        <div className="info-content">
          <div className='projects'>
            <p>500+</p>
            <span>Projects completed</span>
          </div>
          <div className='clients'>
            <p>200+</p>
            <span>Happy clients</span>
          </div>
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



        {/* skills section */}
        <div className='skills-container'>
          <h2>MY SKILLS</h2>
          <div className="card-container">
          <div className='skills-card'>
            <img src='html.png' alt='html logo' />
            <h4>HTML</h4>
          </div>

          <div className='skills-card'>
            <img src='css-3.png' alt='css logo' />
            <h4>CSS</h4>
          </div>

          <div className='skills-card'>
            <img src='java-script.png' alt='javascript logo' />
            <h4>JAVASCRIPT</h4>
          </div>

          <div className='skills-card'>
            <img src='react.png' alt='react logo' />
            <h4>REACT</h4>
          </div>

          <div className='skills-card'>
            <img src='sass.png' alt='sass logo' />
            <h4>SASS</h4>
          </div>

          <div className='skills-card'>
            <img src='bootstrap.png' alt='bootstrap logo' />
            <h4>BOOTSTRAP</h4>
          </div>
          </div>
          

          <div className='skills-image'>
            <img src='girl2.jpg' alt='a girl' />
          </div>

        </div>

        <div className='statement-section'>
          <p>Intrested in working with me?</p>
          <button>
          <a href="#contact">CONTACT</a>
          </button>
        </div>




        {/* portfolio section */}
        <div className='portfolio-section'>
          <h2>MY PROJECTS</h2>

        <div className="portfolio-card">
          <div className='portfolio-image'>
            <img src='portfolio-image.jpg' alt='picture of your project one'/>
          </div>

          <div className='portfolio-info'>
            <h4 className='portfolio-title'>WEB DESIGN</h4>
            <h5 className='portfolio-subtitle'>Website Design for Marketing Agency Startup</h5>
            <p className='portfolio-desc'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
            <Popup trigger={
              <button className="popup-button">VIEW PROJECT</button>
            }modal nested>
              {
                close =>(
                  <div className='popup-box'>
                    <div className='popup-header'>
                    <h5 className='popup-subtitle'>Website Design for Marketing Agency Startup</h5>
                    <button onClick={() => close()}>&times;</button>
                    </div>

                <div className='popup-info'>
                <div className='popup-image'>
                      <img src='portfolio-image.jpg' alt='picture of project one'/>
                    </div>

                    <div className='popup-content'>
                      <p className='popup-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p><span className='bold'></span>Type: Website</p>
                      <p><span className='bold'></span>Languages: HTML, CSS, JS</p>
                      <p><span className='bold'></span>Platform: Wordpress</p>
                      <p><span className='bold'></span>Country: USA</p>
                      <p><span className='bold'></span>Live URL: www.example.com</p>
                    </div>
                </div>
                    

                  </div>
                )
              }
            </Popup>
          </div>

          </div>

          <div className="portfolio-card">

          <div className='portfolio-info'>
            <h4 className='portfolio-title'>WEB DESIGN</h4>
            <h5 className='portfolio-subtitle'>Website Design for Marketing Agency Startup</h5>
            <p className='portfolio-desc'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
            <Popup trigger={
              <button className="popup-button">VIEW PROJECT</button>
            }modal nested>
              {
                close =>(
                  <div className='popup-box'>
                    <div className='popup-header'>
                    <h5 className='popup-subtitle'>Website Design for Marketing Agency Startup</h5>
                    <button onClick={() => close()}>&times;</button>
                    </div>

                    <div className='popup-image'>
                      <img src='portfolio-image.jpg' alt='picture of project two'/>
                    </div>

                    <div className='popup-content'>
                      <p className='popup-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p><span className='bold'></span>Type: Website</p>
                      <p><span className='bold'></span>Languages: HTML, CSS, JS</p>
                      <p><span className='bold'></span>Platform: Wordpress</p>
                      <p><span className='bold'></span>Country: USA</p>
                      <p><span className='bold'></span>Live URL: www.example.com</p>
                    </div>

                  </div>
                )
              }
            </Popup>
          </div>

          <div className='portfolio-image'>
            <img src='portfolio-image.jpg' alt='picture of your project two'/>
          </div>

          </div>

          <div className="portfolio-card">

          <div className='portfolio-image'>
            <img src='portfolio-image.jpg' alt='picture of your project three'/>
          </div>

          <div className='portfolio-info'>
            <h4 className='portfolio-title'>WEB DESIGN</h4>
            <h5 className='portfolio-subtitle'>Website Design for Marketing Agency Startup</h5>
            <p className='portfolio-desc'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
            <Popup trigger={
              <button className="popup-button">VIEW PROJECT</button>
            }modal nested>
              {
                close =>(
                  <div className='popup-box'>
                    <div className='popup-header'>
                    <h5 className='popup-subtitle'>Website Design for Marketing Agency Startup</h5>
                    <button onClick={() => close()}>&times;</button>
                    </div>

                    <div className='popup-image'>
                      <img src='portfolio-image.jpg' alt='picture of project three'/>
                    </div>

                    <div className='popup-content'>
                      <p className='popup-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p><span className='bold'></span>Type: Website</p>
                      <p><span className='bold'></span>Languages: HTML, CSS, JS</p>
                      <p><span className='bold'></span>Platform: Wordpress</p>
                      <p><span className='bold'></span>Country: USA</p>
                      <p><span className='bold'></span>Live URL: www.example.com</p>
                    </div>

                  </div>
                )
              }
            </Popup>
          </div>

          </div>
        
          <div className="portfolio-card">



<div className='portfolio-info'>
  <h4 className='portfolio-title'>WEB DESIGN</h4>
  <h5 className='portfolio-subtitle'>Website Design for Marketing Agency Startup</h5>
  <p className='portfolio-desc'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
  <Popup trigger={
    <button className="popup-button">VIEW PROJECT</button>
  }modal nested>
    {
      close =>(
        <div className='popup-box'>
          <div className='popup-header'>
          <h5 className='popup-subtitle'>Website Design for Marketing Agency Startup</h5>
          <button onClick={() => close()}>&times;</button>
          </div>

          <div className='popup-image'>
            <img src='portfolio-image.jpg' alt='picture of project four'/>
          </div>

          <div className='popup-content'>
            <p className='popup-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><span className='bold'></span>Type: Website</p>
            <p><span className='bold'></span>Languages: HTML, CSS, JS</p>
            <p><span className='bold'></span>Platform: Wordpress</p>
            <p><span className='bold'></span>Country: USA</p>
            <p><span className='bold'></span>Live URL: www.example.com</p>
          </div>

        </div>
      )
    }
  </Popup>
</div>

<div className='portfolio-image'>
  <img src='portfolio-image.jpg' alt='picture of your project four'/>
</div>

        </div>
        
        </div>





{/* testimonial section */}
          <div className='testimonial-section'>
            <Carousel 
                showArrows = {true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
              <div className='carousel-card'>
                <img src='user.png' alt='first user' style={{width: "30%"}}/>
                <div className='carousel-content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>Alexa Diaz</h3>
                  <h4>CEO at Zillow</h4>
                </div>
              </div>

              <div className='carousel-card'>
                <img src='user.png' alt='second user' style={{width: "30%"}}/>
                <div className='carousel-content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>Ogie Richards</h3>
                  <h4>CEO at Microsoft</h4>
                </div>
              </div>

              <div className='carousel-card'>
                <img src='user.png' alt='third user' style={{width: "30%"}}/>
                <div className='carousel-content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>Kathryn Aldens</h3>
                  <h4>CEO at Amazon</h4>
                </div>
              </div>

              <div className='carousel-card'>
                <img src='user.png' alt='fourth user' style={{width: "30%"}}/>
                <div className='carousel-content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>Daniel Gumbao</h3>
                  <h4>CEO at IBM</h4>
                </div>
              </div>

            </Carousel>
          </div>



          {/* contact section */}
          <div className='contact-section'>
            <div className='contact-information'>
              <div className='contact-form'>
                <form>
                  <h3>Get in touch</h3>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='firstName' />
                  <label htmlFor='email'>Email:</label>
                  <input type='email' id='email' />
                  <label htmlFor='subject'>Subject:</label>
                  <input type='text' id='subject' />
                  <label htmlFor='message'>Your message</label>
                  <textarea></textarea>
                  <button>SEND MESSAGE</button>
                </form>
              </div>

              <div className='contact-location'>
                <div className='location-info'>
                  <img src="phone.png"alt="phone" />
                  <h3>PHONE</h3>
                  <p>+ 254 710101010</p>
                </div>

                <div className='location-info'>
                  <img src='email.png' alt="mail" />
                  <h3>MAIL</h3>
                  <p>info@reactfolio.com</p>
                </div>

                <div className='location-info'>
                  <img src='location.png' alt="location" />
                  <h3>VISIT MY STUDIO</h3>
                  <p>KCB, Nairobi Kenya</p>
                </div>
              </div>

            </div>
            <div className='contact-socials'>
              <div className='social-images'>
                <a><img src='facebook.svg' alt="facebook" /></a>
                <a><img src='twitter.png' alt="X" /></a>
                <a><img src='instagram.svg' alt="instagram" /></a>
                <a><img src='linkedin.png' alt="linkedin" /></a>
                <a><img src='pinterest.png' alt="pinterest" /></a>
              </div>

              <div className='reserved-info'>
                <p>&copy; 2024 copyright all right resered by reactfolio</p>
              </div>
            </div>

          </div>
          
    </div>
  );
}

export default App;
