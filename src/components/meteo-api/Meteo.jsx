import { useEffect, useState } from 'react';
import { BACK_URL } from '../../http';
import './Meteo.css';

export default function Meteo() {
  const [meteo, setMeteo] = useState([]);
  const [meteoDesc, setMeteoDesc] = useState([]);

  const [weatherApi, setWeatherApi] = useState();

  useEffect(() => {
    fetch(`${BACK_URL}/secrets/weatherKey`)
        .then(res => res.json())
        .then(data => {
          setWeatherApi(data.weatherKey);
        })
        .catch(err => {
            console.error(err);
        });
  }, []);

  useEffect(() => {
    if(weatherApi){
      fetch(`https://api.weatherbit.io/v2.0/current?city=Saran&country=fr&key=${weatherApi}`)
        .then(res => res.json())
        .then(data => {
          setMeteo(data.data[0]);
          setMeteoDesc(data.data[0].weather);
        })
        .catch(err => {
            console.error(err);
        });
    }
  }, [weatherApi]);

  return (
    <section className="meteo">
      {meteo? 
        <div className="meteo-info">
          <img src={`https://www.weatherbit.io/static/img/icons/${meteoDesc.icon}.png`} alt={meteoDesc.description} />
          <p className="meteo-name">{meteo.city_name} </p> 
          <p className="meteo-temp">{meteo.temp}°C</p>
        </div>
        :
        <p>Loading data meteo</p>
      }
    </section>
  );
}