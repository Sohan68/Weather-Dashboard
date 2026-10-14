import { useContext } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard.jsx";
import { WeatherContext } from "./Context/Index.js";

// import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
// import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
// import MistImage from "./assets/backgrounds/mist.jpeg";
// import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
// import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
// import SnowImage from "./assets/backgrounds/sunny.jpg";
// import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
// import WinterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
  const { loading, weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <div className="grid items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
