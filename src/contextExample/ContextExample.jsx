import CtxInfo from './CtxInfo';
import CtxForm from './CtxForm';
import { CtxProvider } from './contexts/CtxExampleContext';

function ContextExample() {
  return (
    <div className='example'>
      <CtxProvider>
        <CtxInfo />
        <CtxForm></CtxForm>
      </CtxProvider>
    </div>
  );
}

export default ContextExample;
