import { useContext } from "react";
import { WeatherContext } from "../../Context/Index";

import cloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import pinIcon from "../../assets/pin.svg";
import getFormatedDate from "../../utils/Time_Date";
const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, feelsTemperature, climate, location, time } =
    weatherData;
  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return cloudIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Clear":
        return sunnyIcon;
      case "Thunder":
        return ThunderIcon;

      default:
        return sunnyIcon;
    }
  }
  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="cloud" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>

            <div className="flex items-center space-x-4 md:mb-4">
              <img className="w-5 h-5 md:w-8 md:h-8" src={pinIcon} />
              <h2 className="text-2xl lg:text-[50px]">{location} </h2>
            </div>
          </div>
        </div>
        <h1 className="text-lg lg:text-xl xl:text-2xl leading-none md:mb-4">
          Feels like: {Math.round(feelsTemperature)}°
        </h1>
        <p className="text-sm lg:text-lg">
          {getFormatedDate(time, "time", false)} -
          {getFormatedDate(time, "date", false)}
        </p>
      </div>
    </>
  );
};

export default WeatherHeadline;
