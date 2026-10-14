const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Iceland",
    latitude: 64.1283,
    longitude: -21.8278,
  },
  {
    location: "Lapland",
    latitude: 66.5039,
    longitude: 25.7294,
  },
  {
    location: "Alaska",
    latitude: 61.2181,
    longitude: -149.9003,
  },
  {
    location: "Hokkaido",
    latitude: 43.0618,
    longitude: 141.3545,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },

  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Russia",
    latitude: 69.7511,
    longitude: 61.6631,
  },
  {
    location: "Canada",
    latitude: 52.1332,
    longitude: -106.67,
  },
  {
    location: "Norway",
    latitude: 78.2232,
    longitude: 15.6267,
  },
  {
    location: "Siberia",
    latitude: 71.6872,
    longitude: 128.8697,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    // const defaultLocation = {
    //   location: "",
    //   longitude: 0,
    //   latitude: 0,
    // };
    return null;
  }
}

export { getLocationByName, getLocations };
