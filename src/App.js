import "./App.css";
import mortdog from "./radiant-mortdog.png";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mortdog} className="App-logo" alt="logo" />
        <p>Work in progress</p>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
