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
import { FaArrowAltCircleLeft, FaArrowRight } from "react-icons/fa";

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
      perView: 2,
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
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider my-4 gap-3">
          <div className="keen-slider__slide max-h-[60vh] number-slide1">
            <img src={doctor1} alt="" />
          </div>
          <div className="keen-slider__slide max-h-[60vh] number-slide2">
            <img src={doctor2} alt="" />
          </div>
          <div className="keen-slider__slide max-h-[60vh] number-slide3">
            <img src={doctor3} alt="" />
          </div>
          <div className="keen-slider__slide max-h-[60vh] number-slide4">
            <img src={doctor4} alt="" />
          </div>
          <div className="keen-slider__slide max-h-[60vh] number-slide5">
            <img src={doctor5} alt="" />
          </div>
          <div className="keen-slider__slide max-h-[60vh] number-slide6">
            <img src={doctor6} alt="" />
          </div>
        </div>
        {loaded && instanceRef && (
          <>
            <FaArrowAltCircleLeft
              className="bg-red-800 text-5xl"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <FaArrowRight
              className="bg-red-800 text-5xl"
              onClick={(e) => e.stopPropagation || instanceRef.current?.next()}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
