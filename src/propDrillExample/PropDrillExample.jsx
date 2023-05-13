import PropDrillInfo from './PropDrillInfo';
import PropDrillForm from './PropDrillForm';

export default function PropDrillExample({ currentState, updateState }) {
  return (
    <div className='example'>
      <PropDrillInfo currentState={currentState} />
      <PropDrillForm updateState={updateState} />
    </div>
  );
}
