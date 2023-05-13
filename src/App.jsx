import { useState } from 'react';
import PropDrillExample from './propDrillExample/PropDrillExample';
import ContextExample from './contextExample/ContextExample';
import CompositionExample from './compositionExample/CompositionExample';
import './App.css';

function App() {
  const [propDrillState, setPropDrillState] = useState('');
  return (
    <div className='app'>
      <PropDrillExample currentState={propDrillState} updateState={setPropDrillState} />
      <ContextExample />
      <CompositionExample />
    </div>
  );
}

export default App;
