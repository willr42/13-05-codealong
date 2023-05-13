import UserAuthInfo from './components/UserAuthInfo';
import UserAuthForm from './components/UserAuthForm';
import { UserAuthProvider } from './contexts/UserAuthContext';
import './App.css';

function App() {
  return (
    <div className='app'>
      <UserAuthProvider>
        <UserAuthInfo />
        <UserAuthForm></UserAuthForm>
      </UserAuthProvider>
    </div>
  );
}

export default App;
