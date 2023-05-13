import { useState } from 'react';
import ContextExample from './contextExample/ContextExample';
import PropDrillExample from './propDrillExample/PropDrillExample';
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
