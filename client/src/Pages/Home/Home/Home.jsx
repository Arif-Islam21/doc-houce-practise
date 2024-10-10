import Services from "../Services/Services";
import Hero from "../Hero/Hero";
import Info from "../Infos/Info";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Info />
      <Reviews />
    </div>
  );
};

export default Home;
