import { useState } from "react";
import { LocationContext } from "../Context/Index";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    longitude: 0,
    latitude: 0,
  });
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
