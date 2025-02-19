import decore from "../assets/images/hero-decore.png";
import heroImage from "../assets/images/hero-image.png";
import textDecore from "../assets/images/text-decore.png";

const Hero = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="hidden lg:block -z-1 w-[300px] h-[300px] absolute bg-[#D5AEE4] blur-3xl -left-[30%] -top-[10%]" />
      <img
        src={decore}
        alt="decore image"
        className="absolute right-0 top-0 -z-10 w-[40%]"
      />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5">
          <div className="space-y-5 flex flex-col justify-center">
            <p className="font-bold uppercase font-poppins text-primary text-lg lg:text-2xl">
              Best Destinations around the world
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-indigo-950 font-volkhov">
              Travel,{" "}
              <span className="relative">
                enjoy{" "}
                <div className="absolute bottom-3 -z-1 -left-7 w-96 hidden md:block">
                  <img src={textDecore} alt="text decore" className="" />
                </div>
              </span>{" "}
              and live a new and full life
            </h1>
            <p className="text-base lg:text-lg font-poppins font-medium text-gray-700">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-10">
              <button className="h-14 flex items-center justify-center bg-secondary text-white font-poppins rounded-xl px-8 hover:bg-secondary/90 shadow-2xl shadow-secondary/50">
                Find Out More
              </button>
              <a href="" className="flex  items-center gap-3">
                <button className="h-14 w-14 bg-primary rounded-full shadow-2xl shadow-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="text-xl font-poppins font-medium text-gray-700 hidden md:block">
                  Play Demo
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center">
            <img
              src={heroImage}
              alt="traveller"
              height={500}
              className="-z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
