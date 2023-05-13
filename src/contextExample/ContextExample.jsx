import CtxInfo from './CtxInfo';
import CtxForm from './CtxForm';
import { CtxProvider } from './contexts/UserAuthContext';

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
