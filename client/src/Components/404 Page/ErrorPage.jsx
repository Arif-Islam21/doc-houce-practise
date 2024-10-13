import { Link } from "react-router-dom";
import errorPage from "../../assets/background/404.avif";
import Button from "../Button/Button";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">Sorry</h2>
        <h5>This page is not found</h5>
        <img src={errorPage} alt="" />
        <Link to="/">
          <Button text="Return Home" type="secondary" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
