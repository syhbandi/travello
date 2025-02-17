import logo from "../assets/images/travello.png";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 py-5">
      <div className="container mx-auto px-5 max-w-7xl flex items-center justify-between">
        <a href="/">
          <img src={logo} className="w-[100px] h-auto" alt="Travello" />
        </a>

        <div className="items-center gap-10 font-poppins hidden lg:flex">
          {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
            (item, index) => (
              <a
                href="#"
                key={index}
                className="text-gray-700 hover:text-primary"
              >
                {item}
              </a>
            )
          )}
          <a href="#">
            <button className="h-11 border border-gray-700 rounded bg-transparent text-gray-700 hover:text-primary  transition-all px-5 cursor-pointer">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
