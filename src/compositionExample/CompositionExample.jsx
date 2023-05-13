import CompositionInfo from './CompositionInfo';
import CompositionForm from './CompositionForm';
import { useState } from 'react';

export default function CompositionExample() {
  const [compositionState, setCompositionState] = useState('');

  return (
    <div className='example'>
      <CompositionInfo>{compositionState}</CompositionInfo>
      <CompositionForm updateState={setCompositionState} />
    </div>
  );
}
