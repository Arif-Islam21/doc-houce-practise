import Services from "../Services/Services";
import Hero from "../Hero/Hero";
import Info from "../Infos/Info";
import Reviews from "../Reviews/Reviews";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Info />
      <Reviews />
      <ExpertDoctor />
      <Contact />
    </div>
  );
};

export default Home;
