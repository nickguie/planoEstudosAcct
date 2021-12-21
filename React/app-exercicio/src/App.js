import './App.css';

function App() {
  const olaMundo= "Ola Mundo";
  const d = new Date();

  return (
    <div className="App">
      <header className="App-header">        
        <h2>
          {olaMundo.toUpperCase() + " " + d} 
        </h2>
        <h2>
          {olaMundo.toLowerCase() + " " + d}
        </h2>
        <h2>
          {olaMundo.slice(0, 3) + " " + d}
        </h2>
        <h2>
          {olaMundo.split('').reverse().join('') + " " + d}
        </h2>
        <h2>
          <i>{olaMundo + " " + d}</i>
        </h2>
        <h2>
          {olaMundo.split('').sort(() => {return 0.5-Math.random()}).join('') + " " + d}
        </h2>
        <h2>
          {olaMundo.repeat(2) + " " + d} 
        </h2>
        <h2>
          {olaMundo.charAt(4) + " " + d}
        </h2>
        <h2 class="olaMundo9">
          {olaMundo + " " + d}
        </h2>
        <h2 class="olaMundo10">
          {olaMundo + " " + d}
        </h2>        
      </header>
    </div>
  );
}

export default App;
