import { useContext } from 'react';
import { UserAuthContext } from './contexts/UserAuthContext';

export default function CtxInfo() {
  const userJwtCtx = useContext(UserAuthContext);
  return (
    <div>
      <h1>Context Example</h1>
      <h2>User: {`${userJwtCtx.readJwt}`}</h2>
    </div>
  );
}
