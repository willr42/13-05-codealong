import { useContext } from 'react';
import { UserAuthContext } from '../contexts/UserAuthContext';

export default function UserAuthInfo() {
  let userInfo = useContext(UserAuthContext);
  return <h1>User: {`${userInfo.jwt}`}</h1>;
}
