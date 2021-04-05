import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

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
      <h3>Profile information</h3>
      <Profile></Profile>
    </div>
  );
}

export default App;
