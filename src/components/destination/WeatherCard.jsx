import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Cloud,
  CloudRain,
  Sun,
  CloudSun,
  Wind,
  Droplets,
  ThermometerSun,
} from "lucide-react";

function WeatherCard({ destination }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${destination.latitude}&longitude=${destination.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`,
        );

        if (!response.ok) {
          throw new Error("Weather data could not be fetched");
        }

        const data = await response.json();

        setWeather(data.current);
      } catch (error) {
        console.error("Weather API Error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [destination.latitude, destination.longitude]);

  const getWeatherInfo = (code) => {
    if (code === 0) return { label: "Clear Sky", icon: Sun };
    if ([1, 2].includes(code))
      return { label: "Partly Cloudy", icon: CloudSun };
    if (code === 3) return { label: "Overcast", icon: Cloud };
    if ([45, 48].includes(code))
      return { label: "Foggy", icon: Cloud };
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
      return { label: "Rainy", icon: CloudRain };
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return { label: "Snowy", icon: Cloud };
    if ([95, 96, 99].includes(code))
      return { label: "Thunderstorm", icon: CloudRain };

    return { label: "Unknown", icon: Cloud };
  };

  return (
    <section className="mt-24">
      <div className="mb-8">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
          LIVE WEATHER
        </p>

        <h2 className="text-4xl font-semibold text-[#172B3A] md:text-5xl">
          Weather in {destination.name}
        </h2>

        <p className="mt-3 text-lg text-[#172B3A]/60">
          Check the current weather before planning your journey.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-8 shadow-lg backdrop-blur-xl md:p-10"
      >
        {loading ? (
          <p className="text-lg text-[#172B3A]/60">
            Loading weather information...
          </p>
        ) : error || !weather ? (
          <p className="text-lg text-red-500">
            Unable to load weather information. Please try again later.
          </p>
        ) : (
          <>
            {(() => {
              const { label, icon: WeatherIcon } = getWeatherInfo(
                weather.weather_code,
              );

              return (
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-[#A8E3D9]/40 p-4">
                        <WeatherIcon
                          size={48}
                          className="text-[#238A83]"
                        />
                      </div>

                      <div>
                        <p className="text-2xl font-semibold text-[#172B3A]">
                          {label}
                        </p>
                        <p className="mt-1 text-[#172B3A]/60">
                          Current weather
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-8 text-7xl font-semibold tracking-tight text-[#172B3A]">
                      {Math.round(weather.temperature_2m)}°
                      <span className="text-4xl">C</span>
                    </h3>

                    <p className="mt-3 text-lg text-[#172B3A]/60">
                      Feels like {Math.round(weather.apparent_temperature)}°C
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#F7F5EF] p-6">
                      <Droplets size={26} className="text-[#238A83]" />
                      <p className="mt-4 text-sm text-[#172B3A]/60">
                        Humidity
                      </p>
                      <p className="mt-1 text-3xl font-semibold text-[#172B3A]">
                        {weather.relative_humidity_2m}%
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F7F5EF] p-6">
                      <Wind size={26} className="text-[#238A83]" />
                      <p className="mt-4 text-sm text-[#172B3A]/60">
                        Wind Speed
                      </p>
                      <p className="mt-1 text-3xl font-semibold text-[#172B3A]">
                        {weather.wind_speed_10m}{" "}
                        <span className="text-base">km/h</span>
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F7F5EF] p-6 sm:col-span-2">
                      <ThermometerSun
                        size={26}
                        className="text-[#238A83]"
                      />
                      <p className="mt-4 text-sm text-[#172B3A]/60">
                        Destination
                      </p>
                      <p className="mt-1 text-xl font-semibold text-[#172B3A]">
                        {destination.name}, {destination.country}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </>
        )}
      </motion.div>
    </section>
  );
}

export default WeatherCard;