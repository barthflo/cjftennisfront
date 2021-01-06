import { useEffect, useState } from 'react';
import './Meteo.css';

export default function Meteo() {
  const [meteo, setMeteo] = useState([]);
  const [meteoDesc, setMeteoDesc] = useState([]);

  useEffect(() => {
    // 749d149986fe4cdab8a5627db8cc9658
    // 92ec111973f445a98af6f77beab72cb9
    fetch(`https://api.weatherbit.io/v2.0/current?city=Saran&country=fr&key=749d149986fe4cdab8a5627db8cc9658`)
        .then(res => res.json())
        .then(data => {
          setMeteo(data.data[0]);
          setMeteoDesc(data.data[0].weather);
        })
        .catch(err => {
            console.error(err);
        });
    console.log("meteo");
  }, [])

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