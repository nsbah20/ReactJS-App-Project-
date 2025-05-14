import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I’m Adama Ns Bah 👋</h1>
        <p>This is my deployed ReactJS app using AWS S3 and CodePipeline.</p>
        <a
          className="App-link"
          href="https://github.com/nsbah20/ReactJS-App-Project-"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code on GitHub
        </a>
      </header>
    </div>
  );
}

export default App; 