import { createContext, useState } from 'react';

const CtxExampleContext = createContext();

function CtxProvider({ children }) {
  const [jwt, setJwt] = useState('');

  return (
    <CtxExampleContext.Provider value={{ readJwt: jwt, updateJwt: setJwt }}>
      {children}
    </CtxExampleContext.Provider>
  );
}

export { CtxExampleContext, CtxProvider };
