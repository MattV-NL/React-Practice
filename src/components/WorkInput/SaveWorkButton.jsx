import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { SERVER_EP } from '../../constants';
import ButtonComp from '../Inputs/Button';

const SaveWorkButton = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { workValues, setSaveWorkModalVisible } = useContext(WorkDataContext);

  const sendWorkInformation = useCallback(async (workValue) => {
    const newWorkValue = { ...workValue };
    delete newWorkValue.details;
    const response = await fetch(SERVER_EP.saveWorkInformation, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorkValue),
    });
    const serverMessage = await response.json();
  }, []);

  const handleClick = useCallback(async () => {
    if (authStatus.auth) {
      const workValuesArray = Array.from(workValues.values());
      workValuesArray.forEach(sendWorkInformation);
    } else {
      setSaveWorkModalVisible(true);
    }
  }, [authStatus, workValues, sendWorkInformation, setSaveWorkModalVisible]);
  return (
    <div className='button-container'>
      <ButtonComp
        type='primary'
        className='button'
        onClick={handleClick}
        id='save-work-button'
      >
        Save Work Info
      </ButtonComp>
    </div>
  );
};

export default SaveWorkButton;
