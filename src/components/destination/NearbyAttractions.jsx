import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

import {
  MapPin,
  Compass,
  Map as MapIcon,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

function NearbyAttractions({ destination }) {
  const { latitude, longitude } = destination;

  const isValidCoordinates =
    Number.isFinite(latitude) && Number.isFinite(longitude);

  const {
    data: attractions = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["nearby-attractions", latitude, longitude],

    queryFn: async () => {
      const query = `
        [out:json][timeout:25];
        nwr["tourism"~"attraction|museum|viewpoint|zoo|theme_park"]["name"]
        (around:10000,${latitude},${longitude});
        out center;
      `;

      const response = await fetch(
        "https://overpass-api.de/api/interpreter",
        {
          method: "POST",
          body: new URLSearchParams({ data: query }),
        }
      );

      if (!response.ok) {
        throw new Error(`API failed: ${response.status}`);
      }

      const data = await response.json();

      const places = (data.elements ?? [])
        .filter((place) => place.tags?.name)
        .slice(0, 8)
        .map((place) => ({
          id: `${place.type}-${place.id}`,
          name: place.tags.name,
          category: place.tags.tourism?.replaceAll("_", " "),
          latitude: place.lat ?? place.center?.lat,
          longitude: place.lon ?? place.center?.lon,
        }))
        .filter(
          (place) =>
            Number.isFinite(place.latitude) &&
            Number.isFinite(place.longitude)
        );

      return places;
    },

    enabled: isValidCoordinates,
    staleTime: 30 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const loading = isValidCoordinates && isPending;
  const error = !isValidCoordinates || isError;

  return (
    <section className="mt-24">
      <div className="mb-8">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
          EXPLORE NEARBY
        </p>

        <h2 className="text-4xl font-semibold text-[#172B3A] md:text-5xl">
          Explore on Map
        </h2>

        <p className="mt-3 text-lg text-[#172B3A]/60">
          Discover interesting places around {destination.name}.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/80 bg-white/60 p-6 shadow-lg backdrop-blur-xl md:p-10"
      >
        <div className="mb-6 flex items-center gap-3">
          <MapIcon size={25} className="text-[#238A83]" />

          <h3 className="text-2xl font-semibold text-[#172B3A]">
            {destination.name} Map
          </h3>
        </div>

        <div className="h-[400px] overflow-hidden rounded-2xl md:h-[500px]">
          {isValidCoordinates ? (
            <MapContainer
              key={`${latitude}-${longitude}`}
              center={[latitude, longitude]}
              zoom={10}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Destination Marker */}
              <CircleMarker
                center={[latitude, longitude]}
                radius={11}
                pathOptions={{
                  color: "#172B3A",
                  fillColor: "#172B3A",
                  fillOpacity: 1,
                }}
              >
                <Popup>
                  <strong>{destination.name}</strong>
                  <br />
                  Your destination
                </Popup>
              </CircleMarker>

              {/* Nearby Attractions Markers */}
              {attractions.map((place) => (
                <CircleMarker
                  key={place.id}
                  center={[place.latitude, place.longitude]}
                  radius={8}
                  pathOptions={{
                    color: "#238A83",
                    fillColor: "#238A83",
                    fillOpacity: 0.9,
                  }}
                >
                  <Popup>
                    <strong>{place.name}</strong>
                    <br />
                    {place.category || "Tourist place"}
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          ) : (
            <div className="flex h-full items-center justify-center bg-[#F7F5EF] text-[#172B3A]/60">
              Map coordinates are unavailable.
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-6 text-sm text-[#172B3A]/70">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#172B3A]" />
            Destination
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#238A83]" />
            Nearby attractions
          </div>
        </div>

        <div className="mt-8">
          {loading ? (
            <p className="text-lg text-[#172B3A]/60">
              Finding nearby attractions...
            </p>
          ) : error ? (
            <p className="text-lg text-red-500">
              Unable to load nearby attractions. Map is still available.
            </p>
          ) : attractions.length === 0 ? (
            <p className="text-lg text-[#172B3A]/60">
              No attractions found nearby.
            </p>
          ) : (
            <>
              <h3 className="mb-5 text-2xl font-semibold text-[#172B3A]">
                Nearby Places
              </h3>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {attractions.map((place) => (
                  <div
                    key={place.id}
                    className="rounded-2xl bg-[#F7F5EF] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MapPin
                      size={27}
                      className="text-[#238A83]"
                    />

                    <h4 className="mt-5 text-xl font-semibold text-[#172B3A]">
                      {place.name}
                    </h4>

                    <p className="mt-3 flex items-center gap-2 text-sm capitalize text-[#238A83]">
                      <Compass size={16} />
                      {place.category || "Tourist place"}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default NearbyAttractions;
