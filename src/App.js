import './App.css';
import logo from './logo.svg';
import './styles.scss';
import AlbumFeature from './Component/Feature/Album/Pages'
import TodoFeature from './Component/Feature/Todo/Pages'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/votanlenhan"
          target="_blank"
          rel="noopener noreferrer"

        >
          King Of React
        </a>
        <AlbumFeature />



        <TodoFeature />




      </header>
    </div>
  );
}

export default App;
