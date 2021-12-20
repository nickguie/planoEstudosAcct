import './App.css';

function App() {
  const olaMundo= "Ola Mundo";

  return (
    <div className="App">
      <header className="App-header">        
        <h2>
          {olaMundo.toUpperCase()}
        </h2>
        <h2>
          {olaMundo.toLowerCase()}
        </h2>
        <h2>
          {olaMundo.slice(0, 3)}
        </h2>
        <h2>
          {olaMundo.split('').reverse().join('')}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <h2>
          {olaMundo}
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
