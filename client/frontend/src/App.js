import logo from './logo.svg';
import './App.css';
import { MovieList } from './Components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieList />
      </header>
    </div>
  );
}

export default App;
