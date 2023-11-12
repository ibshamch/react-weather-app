import Location from "../src/Location";
import React, { useEffect, useState } from "react";
import Weather from "../src/Weather";
const Homepage = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const requestWeather = async (location) => {
    if (location === "") {
      alert("Enter the location");
    } else {
      const apiKey = "597c89cbdcd64795af8144323230511";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
      const res = await fetch(url);
      const json = await res.json();
      setWeather(json);
    }
  };
  useEffect(() => {
    requestWeather("Lahore");
  }, []);
  return (
    <>
      <Location
        location={location}
        requestWeather={requestWeather}
        setLocation={setLocation}
      />
      <Weather weather={weather} />
    </>
  );
};

export default Homepage;
