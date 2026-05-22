import Booking from "./components/Booking";
import Categories from "./components/Categories";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonies from "./components/Testimonies";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Destinations />
      <Booking />
      <Testimonies />
    </>
  );
};

export default App;
