import { useContext } from 'react';
import './account.scss';
import SaveSettingsButton from './SaveSettingsButton';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import DarkMode from '../Settings/DarkMode';
import Units from '../Settings/Units';
import EmailNotifications from '../Settings/EmailNotifications';
import { onChange } from '../../restAPI/onChange';
import RainConflict from '../Settings/RainConflict';
import SnowConflict from '../Settings/SnowConflict';
import WindConflict from '../Settings/WindConflict';
import DeleteAccount from './DeleteAccount';
import DeleteAccountModal from '../Modals/DeleteAccountModal';

const AccountSettings = () => {
  const { clearWeatherValues } = useContext(WeatherDataContext);
  const {
    darkMode,
    setDarkMode,
    emailNotifications,
    setEmailNotifications,
    units,
    setUnits,
  } = useContext(UserSettingsContext);

  return (
    <>
      <div className={darkMode ? 'dark-page-layout' : 'light-page-layout'}>
        <div className='page'>
          <div className={darkMode ? 'dark-page-header' : 'light-page-header'}>
            User Settings
          </div>
          <DarkMode
            checked={darkMode}
            onChange={onChange({
              setterFunction: setDarkMode,
              isBoolean: true,
            })}
          />
          <Units
            darkMode={darkMode}
            units={units}
            setUnits={setUnits}
            clearWeatherValues={clearWeatherValues}
          />
          <EmailNotifications
            checked={emailNotifications}
            onChange={onChange({
              setterFunction: setEmailNotifications,
              isBoolean: true,
            })}
          />
          <RainConflict />
          <SnowConflict />
          <WindConflict />
          <SaveSettingsButton />
          <DeleteAccount />
        </div>
      </div>
      <DeleteAccountModal />
    </>
  );
};

export default AccountSettings;
