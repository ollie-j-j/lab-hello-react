import './App.css';

import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import spanner from './images/icon1.png';
import laptop from './images/icon2.png';
import computer from './images/icon3.png';
import laptopTwo from './images/icon4.png';


function App() {
  return (
    <div className="App">

      <div className="section-1">
        <nav>
          <img className="logo" src={logo} alt="logo" />
          <img className="menu" src={menu} alt="logo" />
        </nav>
          <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer</p>
        <button>Awesome!</button>
      </div>

      <div className="section-2">
          <div className="container">
              <div className="declarative">
                <img class="images" src={spanner} alt="logo" />
                <h3>Declarative</h3>
                <p className="text">React makes it painless to create interactive UIs</p>
              </div>
              <div className="components">
                <img class="images" src={laptop} alt="logo" />
                <h3>Components</h3>
                <p className="text">Build encapsulated components that manage their state</p>
              </div>
              <div className="single-way">
                <img class="images"  src={computer} alt="logo" />
                <h3>Single-Way</h3>
                <p className="text">A set of immutavle values are passed to the components</p>
              </div>
              <div className="jsx">
                <img class="images" src={laptopTwo} alt="logo" />
                <h3>JSX</h3>
                <p className="text">Statically typed, designed to run on modern browsers</p>
              </div>
          </div>
      </div>

    </div>
  );
}

export default App;
