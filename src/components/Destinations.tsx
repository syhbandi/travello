import destinationsData from "../data/destinations";
import { formatCurrency } from "../utils";
import destinationDecore from "../assets/images/destinations-decore.png";

const Destinations = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-5">
        <h2 className="text-center font-poppins text-lg font-semibold text-gray-600">
          Top Selling
        </h2>
        <h1 className="text-5xl text-indigo-950 text-center font-volkhov font-bold">
          Top Destinations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 relative">
          {destinationsData.map((destination, index) => (
            <div
              key={`destination-${index}`}
              className="overflow-hidden rounded-4xl shadow-2xl shadow-gray-300"
            >
              <img
                src={destination.image}
                alt={destination.location}
                className="w-full h-[400px] object-cover object-top"
              />
              <div className="bg-white py-10 px-5 space-y-3 font-poppins">
                <div className="flex items-center justify-between font-semibold text-gray-800">
                  <p>{destination.location}</p>
                  <p>{formatCurrency(destination.price)}</p>
                </div>
                <p className="font-medium text-gray-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {destination.days} days Trip
                </p>
              </div>
            </div>
          ))}

          <div className="absolute right-0 bottom-0 -z-10 -mr-10">
            <img
              src={destinationDecore}
              alt="destinations decore"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
