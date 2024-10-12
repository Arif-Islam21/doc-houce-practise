import { FaBriefcaseMedical } from "react-icons/fa";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-base-200 text-base-content p-10">
        <aside>
          <FaBriefcaseMedical className="text-4xl" />
          <p className="font-bold">
            <span className="text-secondary">DOC</span> House
          </p>
          <p className="max-w-md py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            animi corporis maiores explicabo, odio obcaecati laborum ut sapiente
            ullam fuga.
          </p>
          <Button text="Appointment" type="secondary" />
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Doc House Services</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Working Hours</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="bg-base-200">
        <hr className=" text-black py-3 px-12 border-t-4 w-3/4 mx-auto" />
        <aside className="text-center pb-4">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Ariful Islam
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
