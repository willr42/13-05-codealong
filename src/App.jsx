import { useState } from 'react';
import PropDrillExample from './propDrillExample/PropDrillExample';
import ContextExample from './contextExample/ContextExample';
import CompositionExample from './compositionExample/CompositionExample';
import './App.css';
import BlogsProvider from './reducer/BlogsContextComponent';
import BlogsList from './reducer/BlogsList';

function App() {
  const [propDrillState, setPropDrillState] = useState('');
  return (
    <div className='app'>
      <PropDrillExample currentState={propDrillState} updateState={setPropDrillState} />
      <ContextExample />
      <CompositionExample />
      <hr style={{ width: '90vw' }}></hr>

      <BlogsProvider>
        <BlogsList></BlogsList>
      </BlogsProvider>
    </div>
  );
}

export default App;
