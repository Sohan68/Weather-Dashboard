import Page from "./Page";
import FavouriteProvider from "./Provider/FavoriteProvider";
import LocationProvider from "./Provider/LocationProvider";
import WeatherProvider from "./Provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Page />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
