import { useContext, useEffect, useState } from "react";
import FavouriteIcon from "../../assets/heart.svg";

import RedFavriteIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../Context/Index";

const ToggleFavourite = () => {
  const { favourites, AddToFavourite, RemoveFromFavourite } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, toggleFavourite] = useState(false);
  useEffect(() => {
    const Favfound = favourites.find((Fav) => Fav.location === location);
    toggleFavourite(Favfound);
  }, []);

  const handleFavourite = () => {
    const Favfound = favourites.find((Fav) => Fav.location === location);
    if (!Favfound) {
      AddToFavourite(location, longitude, latitude);
    } else {
      RemoveFromFavourite(location);
    }
    toggleFavourite(!isFavourite);
    // console.log(!isFavourite);
  };

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={handleFavourite}
          >
            <img src={isFavourite ? RedFavriteIcon : FavouriteIcon} alt="" />
            <span>
              {" "}
              {isFavourite ? "Remove to Favourite" : "Add to Favourite"}{" "}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ToggleFavourite;
