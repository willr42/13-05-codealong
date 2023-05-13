import { createContext, useState } from 'react';

const UserAuthContext = createContext();

function UserAuthProvider({ children }) {
  const [jwt, setJwt] = useState('');

  return (
    <UserAuthContext.Provider value={{ readJwt: jwt, updateJwt: setJwt }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export { UserAuthContext, UserAuthProvider };
