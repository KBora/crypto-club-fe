import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here we go
        </p>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
      </header>
    </div>
  );
}

export default App;
