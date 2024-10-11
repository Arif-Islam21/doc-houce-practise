import SectionTitle from "../../../Components/SectionTitle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import doctor1 from "../../../assets/doctors/doctor1.avif";
import doctor2 from "../../../assets/doctors/doctor2.avif";
import doctor3 from "../../../assets/doctors/doctor3.avif";
import doctor4 from "../../../assets/doctors/doctor4.avif";
import doctor5 from "../../../assets/doctors/doctor5.avif";
import doctor6 from "../../../assets/doctors/doctor6.avif";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReviewCard from "../../../Components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
        },
      },
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"What Our Patients Says"}
        subHeading={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      />
      <div className="navigation-wrapper relative my-8">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide max-h-[45vh] number-slide1">
            <ReviewCard
              image={doctor1}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
          <div className="keen-slider__slide max-h-[45vh] number-slide2">
            <ReviewCard
              image={doctor2}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
          <div className="keen-slider__slide max-h-[45vh] number-slide3">
            <ReviewCard
              image={doctor3}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
          <div className="keen-slider__slide max-h-[45vh] number-slide4">
            <ReviewCard
              image={doctor4}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
          <div className="keen-slider__slide max-h-[45vh] number-slide5">
            <ReviewCard
              image={doctor5}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
          <div className="keen-slider__slide max-h-[45vh] number-slide6">
            <ReviewCard
              image={doctor6}
              name={"Ariful Islam"}
              text={"Web Developer"}
            />
          </div>
        </div>
        {loaded && instanceRef && (
          <>
            <FaArrowAltCircleLeft
              className="absolute left-0 top-[50%] rounded-full hover:text-secondary duration-300 border-secondary border-2 text-5xl"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <FaArrowAltCircleRight
              className="absolute right-0 top-[50%] rounded-full hover:text-secondary duration-300 border-secondary border-2 text-5xl"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
