import satelliteDish from "../assets/images/satellite-dish.png";
import plane from "../assets/images/plane.png";
import localEvents from "../assets/images/local-events.png";
import customization from "../assets/images/customization.png";
import decore from "../assets/images/categories-decore.png";

const Categories = () => {
  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-5 relative">
        <h2 className="text-center font-poppins text-lg font-semibold text-gray-600">
          CATEGORY
        </h2>
        <h1 className="text-5xl text-indigo-950 text-center font-volkhov font-bold">
          We Offer Best Services
        </h1>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <li className="bg-white rounded-2xl p-10 space-y-3 flex flex-col items-center">
            <img src={satelliteDish} alt="satellite dish" className="h-20" />
            <p className="text-indigo-950 font-poppins font-semibold text-center">
              Calculated Weather
            </p>
            <p className="text-gray-600 font-medium text-center">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </li>
          <li className="bg-white rounded-[48px] p-10 space-y-3 flex flex-col items-center shadow-2xl shadow-gray-400/30 relative">
            <img src={plane} alt="plane" className="h-20" />
            <p className="text-indigo-950 font-poppins font-semibold text-center">
              Best Flights
            </p>
            <p className="text-gray-600 font-medium text-center">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="w-24 h-24 bg-primary absolute -left-[30px] -bottom-[30px] -z-1 rounded-tl-4xl rounded-br-2xl"></div>
          </li>
          <li className="bg-white rounded-2xl p-10 space-y-3 flex flex-col items-center ">
            <img src={localEvents} alt="local events" className="h-20" />
            <p className="text-indigo-950 font-poppins font-semibold text-center">
              Local Events
            </p>
            <p className="text-gray-600 font-medium text-center">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </li>
          <li className="bg-white rounded-2xl p-10 space-y-3 flex flex-col items-center">
            <img src={customization} alt="customization" className="h-20" />
            <p className="text-indigo-950 font-poppins font-semibold text-center">
              Customization
            </p>
            <p className="text-gray-600 font-medium text-center">
              We deliver outsourced aviation services for military customers
            </p>
          </li>
        </ul>

        <div className="absolute right-0 top-0 -z-1 hidden md:block">
          <img src={decore} alt="categories decore" className="w-28" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
