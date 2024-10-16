import Rating from "react-rating";
import doctor1 from "../../../assets/doctors/doctor3.avif";
import doctor2 from "../../../assets/doctors/doctor5.avif";
import { CiLocationArrow1, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "../../../Components/Button/Button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import AboutMe from "./AboutMe";

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "Location", "Review", "Business Hour"];
  return (
    <div className="container my-12 mx-auto space-y-6">
      <div className="hero bg-white  min-h-[75vh] rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor1}
            className="max-w-sm w-full border shadow-md mr-2 rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">Dr. Adnan</h1>
            <h4>MBBS, MD-General Medicine</h4>
            <div className="flex items-center gap-2 py-3">
              <Rating
                className="text-2xl text-secondary"
                initialRating={4}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
              />
              (35)
            </div>
            <p className="flex items-center gap-3">
              <CiLocationArrow1 className="text-2xl" />
              <span>Nilphamari Sadar, Rangpur-</span>
              <span className="text-secondary font-bold ">Get Direction</span>
            </p>
            <div className="flex flex-wrap">
              <img
                src={doctor2}
                className="size-20 rounded-md my-3 mr-3"
                alt=""
              />
              <img
                src={doctor2}
                className="size-20 rounded-md my-3 mr-3"
                alt=""
              />
              <img
                src={doctor2}
                className="size-20 rounded-md my-3 mr-3"
                alt=""
              />
              <img
                src={doctor2}
                className="size-20 rounded-md my-3 mr-3"
                alt=""
              />
              <img
                src={doctor2}
                className="size-20 rounded-md my-3 mr-3"
                alt=""
              />
            </div>
            <div className="flex gap-3 mt-4">
              <Button text="Dentail Filling" type="primary" />
              <Button text="Teeth Whitening" type="primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:px-4 rounded-xl py-8">
        <Tabs
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
        >
          <TabList className={`flex justify-between`}>
            {tabs.map((tab, idx) => (
              <Tab
                style={{
                  backgroundColor: activeTab === idx ? "#F7A582" : "whitesmoke",
                  color: activeTab === idx ? "whitesmoke" : "black",
                }}
                onClick={() => setActiveTab(idx)}
                className={`w-full py-3 font-bold border-none text-center`}
                key={idx}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <AboutMe />
          </TabPanel>
          <TabPanel>
            {/* //TODO: ADD A MAP HERE TO SHOW DOCTOR LOCATION */}
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            {/* //TODO: ADD REVIEWS HERE AS A CARD */}
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            {/* //TODO: ADD BUSINESS HOURS HERE SHOWING ACTIVE TIMES */}
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorProfile;
