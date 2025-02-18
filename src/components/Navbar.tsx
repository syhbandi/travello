import { useEffect, useRef } from "react";
import logo from "../assets/images/travello.png";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add("bg-white", "shadow");
      } else {
        navRef.current?.classList.remove("bg-white", "shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className="fixed w-full py-5 z-10 transition-all ease-in-out duration-300"
      ref={navRef}
    >
      <div className="container mx-auto px-5 max-w-7xl flex items-center justify-between">
        <a href="/">
          <img src={logo} className="w-[100px] h-auto" alt="Travello" />
        </a>

        <div className="items-center gap-10 font-poppins hidden md:flex">
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
