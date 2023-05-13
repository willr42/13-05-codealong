import UserAuthInfo from './CtxInfo';
import UserAuthForm from './CtxForm';
import { UserAuthProvider } from './contexts/UserAuthContext';

function ContextExample() {
  return (
    <>
      <UserAuthProvider>
        <UserAuthInfo />
        <UserAuthForm></UserAuthForm>
      </UserAuthProvider>
    </>
  );
}

export default ContextExample;
