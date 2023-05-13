import PropTypes from 'prop-types';
import { createContext } from 'react';

const defaultUserAuthInfo = {
  jwt: '',
};

const UserAuthContext = createContext();

UserAuthProvider.propTypes = {
  children: PropTypes.node,
};

function UserAuthProvider({ children }) {
  return (
    <UserAuthContext.Provider value={defaultUserAuthInfo}>{children}</UserAuthContext.Provider>
  );
}

export { UserAuthContext, UserAuthProvider };
