export default function CompositionForm({ updateState }) {
  const submitFormData = (event) => {
    event.preventDefault();
    const jwtFormValue = event.target.elements.jwt.value;
    updateState(jwtFormValue);
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
