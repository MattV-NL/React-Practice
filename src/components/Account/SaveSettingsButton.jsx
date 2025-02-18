import './account.scss';
import ButtonComp from '../Inputs/Button';
import { SaveOutlined } from '@ant-design/icons';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { SERVER_EP } from '../../constants';
import { useCallback, useContext } from 'react';

const SaveSettingsButton = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const {
    darkMode,
    units,
    emailNotifications,
    rainConflict,
    snowConflict,
    windConflict,
  } = useContext(UserSettingsContext);

  const sendSettingInformation = useCallback(async () => {
    const settingsJSON = {
      darkMode,
      units,
      emailNotifications,
      rainConflict,
      snowConflict,
      windConflict,
      user_id: authStatus.user_id,
    };
    const response = await fetch(SERVER_EP.saveSettings, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settingsJSON),
    });
    const savedSettings = await response.json();
  }, [
    darkMode,
    authStatus,
    units,
    emailNotifications,
    rainConflict,
    snowConflict,
    windConflict,
  ]);

  return (
    <ButtonComp
      type={'primary'}
      className='button'
      onClick={sendSettingInformation}
    >
      <SaveOutlined />
      {'   '}Save Settings
    </ButtonComp>
  );
};

export default SaveSettingsButton;
