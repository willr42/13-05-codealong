import { useState } from 'react';
import ContextExample from './contextExample/ContextExample';
import './App.css';

function App() {
  const [propDrillState, setPropDrillState] = useState('');
  return (
    <div className='app'>
      <PropDrillExample currentState={propDrillState} updateState={setPropDrillState} />
      <ContextExample />
    </div>
  );
}

export default App;
