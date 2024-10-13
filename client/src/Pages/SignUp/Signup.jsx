import { Link } from "react-router-dom";
import bg from "../../assets/background/bg.avif";
import Button from "../../Components/Button/Button";

const Signup = () => {
  return (
    <div className="flex px-[10%] py-[6%] min-h-screen  flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative min-h-[70vh] ">
        <img
          src={bg}
          className="w-full absolute top-0 bottom-0 max-h-full"
          alt=""
        />
      </div>
      <div className="w-full md:border md:shadow-sm rounded-md lg:mx-16 md:w-1/2">
        <h2 className="text-center text-3xl font-bold my-6">
          Sign Up To Doc House
        </h2>
        <form className=" py-2">
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter your username"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <div className="w-full lg:w-3/4 mx-auto mt-4 flex justify-center">
            <Button text="Create Account" width="width" type="secondary" />
          </div>
          <p className="text-center my-4">
            Already Registered? Go to{" "}
            <Link to="/signin" className="text-secondary font-bold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
