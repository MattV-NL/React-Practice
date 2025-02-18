import { useContext } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import ButtonComp from '../Inputs/Button';

const WorkButton = () => {
  const { workDataUpdate } = useContext(WorkInputContext);

  return (
    <div className='button-container'>
      <ButtonComp
        type='primary'
        className='button'
        onClick={workDataUpdate}
        id='work-button'
      >
        Enter Work Info
      </ButtonComp>
    </div>
  );
};

export default WorkButton;
