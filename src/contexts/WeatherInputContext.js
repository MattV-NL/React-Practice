import { createContext, useState, useContext, useCallback } from 'react';
import { WeatherDataContext } from './WeatherDataContext';
import { DATE_KEY, PRECIP_KEY, WIND_KEY } from '../constants';

export const WeatherInputContext = createContext();

const WeatherInputContextProvider = ({ children }) => {
  const { submitWeatherValues } = useContext(WeatherDataContext);

  const [date, setDate] = useState('');
  const [precip, setPrecip] = useState('');
  const [wind, setWind] = useState('');
  const [inputWarningDisplay, setInputWarningDisplay] = useState('none');
  const [warningDisplay, setWarningDisplay] = useState('none');

  const weatherDataUpdate = useCallback(
    (e) => {
      if (date && precip && wind) {
        e.preventDefault();
        submitWeatherValues(date, precip, wind);
        setDate('');
        setPrecip('');
        setWind('');
      } else {
        setInputWarningDisplay('flex');
      }
    },
    [submitWeatherValues, date, precip, wind]
  );

  const onChange = useCallback(
    (setterFunction) =>
      ({ target: { value } }) =>
        setterFunction(value),
    []
  );

  return (
    <WeatherInputContext.Provider
      value={{
        weatherData: {
          [DATE_KEY]: { value: date, onChange: onChange(setDate) },
          [PRECIP_KEY]: { value: precip, onChange: onChange(setPrecip) },
          [WIND_KEY]: { value: wind, onChange: onChange(setWind) },
        },
        weatherDataUpdate,
        inputWarningDisplay,
        setInputWarningDisplay,
        warningDisplay,
        setWarningDisplay,
      }}
    >
      {children}
    </WeatherInputContext.Provider>
  );
};

export default WeatherInputContextProvider;
