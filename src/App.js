import logo from './logo.png';
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary />
    </div>
  );
}

export default App;
