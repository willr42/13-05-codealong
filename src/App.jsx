import UserAuthInfo from './components/UserAuthInfo';
import { UserAuthProvider } from './contexts/UserAuthContext';
import './App.css';

function App() {
  return (
    <div className='app'>
      <UserAuthProvider>
        <UserAuthInfo />
      </UserAuthProvider>
    </div>
  );
}

export default App;
