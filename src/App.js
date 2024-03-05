
import './App.css';

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
    </div>
  );
}

export default App;
