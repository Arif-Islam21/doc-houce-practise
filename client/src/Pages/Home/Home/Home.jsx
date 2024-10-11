import Services from "../Services/Services";
import Hero from "../Hero/Hero";
import Info from "../Infos/Info";
import Reviews from "../Reviews/Reviews";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Info />
      <Reviews />
      <ExpertDoctor />
    </div>
  );
};

export default Home;
