import { Link } from "react-router-dom";
const Weather = ({ weather }) => {
  return (
    <div className="weather-container">
      {weather === "" ? (
        <div>
          <h1>Please Give Location for weather</h1>
        </div>
      ) : (
        <div className="weather">
          <h1>
            <Link className="link" to={"/clouds"}>
              Clouds : {weather.current.cloud}
            </Link>
          </h1>
          <h2>
            <Link className="link" to={"/celcius"}>
              Weather in Celcius : {weather.current.feelslike_c}
            </Link>
          </h2>
          <h3>
            {" "}
            <Link className="link" to={"/farenheit"}>
              Weather in Farenheit : {weather.current.feelslike_f}
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
