import { useContext } from 'react';
import { CtxExampleContext } from './contexts/CtxExampleContext';

export default function CtxInfo() {
  const userJwtCtx = useContext(CtxExampleContext);
  return (
    <div>
      <h1>Context Example</h1>
      <h2>User: {`${userJwtCtx.readJwt}`}</h2>
    </div>
  );
}
