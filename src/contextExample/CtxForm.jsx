import { useContext } from 'react';
import { UserAuthContext } from './contexts/UserAuthContext';
import './UserAuthForm.css';

export default function UserAuthForm() {
  let userJwtCtx = useContext(UserAuthContext);

  const submitFormData = (event) => {
    event.preventDefault();
    const jwtFormValue = event.target.elements.jwt.value;
    userJwtCtx.updateJwt(jwtFormValue);
  };

  return (
    <div>
      <form onSubmit={(event) => submitFormData(event)}>
        <label htmlFor='jwt'>JWT as string</label>
        <input type='text' name='jwt' id='jwt' autoComplete='off' />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
