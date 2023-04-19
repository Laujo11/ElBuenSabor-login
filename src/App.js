import './App.css';
import LoginButton from './Components/LoginButton'
import Profile from './Components/Profile'
import LogoutButton from './Components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
      <Profile />
    </div>
  );
}

export default App;
