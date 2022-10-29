import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./WeatherMain.css"
const api = {
  key : "efc45dd3eab132420a46d8ffcffa8274",
  base:  "https://api.openweathermap.org/data/2.5/"
}



function WeatherMain() {
  const[query, setQuery] = useState('');
  const[weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => {
        
        setWeather(result);
        setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let month = months[d.getMonth()];

    let a = new Date();
    let day = a.getDate();

    let year = a.getFullYear()

    return `${month} ${day}, ${year}`  
  }
  return (
    
    <div className={
      (typeof weather.main != "undefined") ?
      ((weather.main.temp > 16) ?
    'app warm' : 'app') : 'app'}>
           <nav class="navbar bg-none">
  <div class="container-fluid">
    <div>

    </div>
    <form class="d-flex justify-content-end" role="search">
    <Link to="/login" className="text-decoration-none text-success">
    <button class="btn btn-outline-success mx-3" type="submit">Login</button></Link>
    <Link to="/register" className="text-decoration-none text-success">
      <button class="btn btn-outline-success" type="submit">Get Premium</button></Link>
    </form>
  </div>
</nav>

     <main>


























      <div className="weatherApp">Weather application</div>
      <li>
        <ul></ul>
      </li>
      <div className="search-box">
        <input type="text" className="search-bar" 
        placeholder="Search Location.."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />

      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
        <div className="location-box">
        <div className="location">{weather.name}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          {Math.round(weather.main.temp)}°c
        </div>
        <div className="weather">
          {weather.weather[0].main}
        </div>
      </div>
        </div>
      ): ('')}
     </main>
    </div>
  );
}

export default WeatherMain;
