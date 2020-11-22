//import logo from './logo.svg';
import './scss/App.scss';
// import { render } from '@testing-library/react';

function buttonClick () {

}

function App() {
  return (
    <div className="App">

      <header className="header">
        <div>
          <h1>Reign Westry</h1> 
        </div>

        <nav className='mainNav'>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>


      <div>
        <button onClick={buttonClick}>Click</button>
      </div>

    </div>
  );
}

export default App;
