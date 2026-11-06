const TRIPS_KEY = "routecraft_trips";

// Get all saved trips
export const getTrips = () => {
  try {
    const savedTrips = localStorage.getItem(TRIPS_KEY);
    return savedTrips ? JSON.parse(savedTrips) : [];
  } catch (error) {
    console.error("Error getting trips:", error);
    return [];
  }
};

// Save a new trip
export const saveTrip = (newTrip) => {
  const existingTrips = getTrips();

  const updatedTrips = [
    ...existingTrips,
    {
      ...newTrip,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    },
  ];
  

  localStorage.setItem(TRIPS_KEY, JSON.stringify(updatedTrips));

  return updatedTrips;
};
