import { FavouriteContext } from "../Context/Index";
import { useLocalStorage } from "../Hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const AddToFavourite = (location, longitude, latitude) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };
  const RemoveFromFavourite = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location,
    );
    setFavourites(restFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, AddToFavourite, RemoveFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteProvider;
