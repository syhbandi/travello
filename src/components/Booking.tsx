import bookingSteps from "../data/steps";
import booking from "../assets/images/booking.png";

const Booking = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-gray-600 font-poppins text-lg font-semibold">
              Easy and Fast
            </h2>
            <h1 className="text-indigo-950 text-5xl font-volkhov font-bold">
              Book your next trip in 3 easy steps
            </h1>
            <ul className="space-y-10 mt-10">
              {bookingSteps.map((step, index) => (
                <li key={index} className="flex gap-5">
                  <img src={step.icon} alt={step.title} className="h-14 w-14" />
                  <div className="space-y-3">
                    <h2 className="font-poppins text-gray-800 font-semibold text-xl">
                      {step.title}
                    </h2>
                    <p className="font-poppins text-gray-500">{step.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <img
              src={booking}
              alt="Booking"
              className="w-full absolute top-16"
            />
            <div className="w-56 h-56 rounded-full bg-sky-600/20 blur-3xl absolute -z-10 top-7 right-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
