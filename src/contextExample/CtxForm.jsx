import { useContext } from 'react';
import { CtxExampleContext } from './contexts/CtxExampleContext';
import '../Form.css';

export default function CtxForm() {
  let userJwtCtx = useContext(CtxExampleContext);

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
