import UserAuthInfo from './CtxInfo';
import UserAuthForm from './CtxForm';
import { UserAuthProvider } from './contexts/UserAuthContext';

function ContextExample() {
  return (
    <div className='example'>
      <UserAuthProvider>
        <UserAuthInfo />
        <UserAuthForm></UserAuthForm>
      </UserAuthProvider>
    </div>
  );
}

export default ContextExample;
