import logo from './logo.svg';
import './App.css';

function App() {
  const subject = 'React';
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Test to see if I need to re-build {subject}</p>
      </header>
    </div>
  );
}

export default App;
