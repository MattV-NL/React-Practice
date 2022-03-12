import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';

const WeatherChart = () => {
  const {weatherValues} = useContext(FirstContext);

  useEffect(() => {
    c3.generate({

      bindto: '#chart',
        data: {
          json: weatherValues,
          keys: {
              x: 'date',
              value: ['Precipitation', 'WindSpeed'],
          },
          colors: {
            Precipitation: '#0000ff',
            WindSpeed: 'D5840E'
      },
    },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                format: '%Y-%m-%d %H:%M:%S'
              }
          }
      }
    });
  }, [weatherValues]);

  return ( 
    <div id='chart'></div>
  );
}

export default WeatherChart
