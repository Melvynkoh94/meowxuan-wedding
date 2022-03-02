import logo from './logo.svg';
import './App.css';
import meowxuanlogo from './melvyn-isabelle-logo2.png';
import swissotellogo from './swissotel.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={meowxuanlogo} alt="meowxuanlogo" />
        <p>
          Celebrate with us on 1st October 2022
        </p>
        <a
          className="App-link"
          href="https://www.swissotel.com/hotels/singapore-stamford/dining/skai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={swissotellogo} alt="swissotel-logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
