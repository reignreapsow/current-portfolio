import React from 'react';
import ReactDOM from 'react-dom';
// // import './index.css';
//import App from './App';

function buttonClick () {

}

const App = () => {
  render (
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

// const App 

ReactDOM.render(<App />, document.getElementById('root'));

// console.log( 'webpack working!')
