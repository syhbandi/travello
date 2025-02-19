import destinationsData from "../data/destinations";
import { formatCurrency } from "../utils";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
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
                <div className="flex items-center justify-between font-semibold text-gray-500">
                  <p>{destination.location}</p>
                  <p>{formatCurrency(destination.price)}</p>
                </div>
                <p className="font-semibold text-gray-500">
                  {destination.days} days Trip
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
