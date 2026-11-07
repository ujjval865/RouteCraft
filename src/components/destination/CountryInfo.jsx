
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Globe2, Landmark, Banknote, Users } from "lucide-react";

const countryCodes = {
  Switzerland: "CHE",
  Indonesia: "IDN",
  Greece: "GRC",
  Japan: "JPN",
  UAE: "ARE",
  "French Polynesia": "PYF",
};

function CountryInfo({ country }) {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        setError(false);

        const countryCode = countryCodes[country];

        if (!countryCode) {
          throw new Error("Country code not found");
        }

        const response = await fetch(
          `https://countries.dev/alpha/${countryCode}`,
        );

        if (!response.ok) {
          throw new Error("Country data could not be fetched");
        }

        const data = await response.json();

        setCountryData(data);
      } catch (error) {
        console.error("Country API Error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [country]);

  const currency = countryData?.currencies?.[0];

  const countryDetails = [
    {
      label: "Capital",
      value: countryData?.capital || "Not available",
      icon: Landmark,
    },
    {
      label: "Currency",
      value: currency
        ? `${currency.name} (${currency.symbol || currency.code})`
        : "Not available",
      icon: Banknote,
    },
    {
      label: "Population",
      value: countryData?.population?.toLocaleString() || "Not available",
      icon: Users,
    },
    {
      label: "Region",
      value: countryData?.region || "Not available",
      icon: Globe2,
    },
  ];

  return (
    <section className="mt-24">
      <div className="mb-8">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
          COUNTRY INFORMATION
        </p>

        <h2 className="text-4xl font-semibold text-[#172B3A] md:text-5xl">
          Know {country}
        </h2>

        <p className="mt-3 text-lg text-[#172B3A]/60">
          Discover useful information about your destination.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/80 bg-white/60 p-8 shadow-lg backdrop-blur-xl md:p-10"
      >
        {loading ? (
          <p className="text-lg text-[#172B3A]/60">
            Loading country information...
          </p>
        ) : error || !countryData ? (
          <p className="text-lg text-red-500">
            Unable to load country information.
          </p>
        ) : (
          <>
            <h3 className="mb-8 text-3xl font-semibold text-[#172B3A]">
              {countryData.name}
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {countryDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="rounded-2xl bg-[#F7F5EF] p-6"
                  >
                    <Icon size={27} className="text-[#238A83]" />

                    <p className="mt-5 text-base text-[#172B3A]/60">
                      {detail.label}
                    </p>

                    <p className="mt-2 break-words text-xl font-semibold text-[#172B3A]">
                      {detail.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}

export default CountryInfo;
