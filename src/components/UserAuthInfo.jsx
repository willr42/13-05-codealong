import { useContext } from 'react';
import { UserAuthContext } from '../contexts/UserAuthContext';

export default function UserAuthInfo() {
  const userJwtCtx = useContext(UserAuthContext);
  return <h1>User: {`${userJwtCtx.readJwt}`}</h1>;
}
