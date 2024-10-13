import { Link } from "react-router-dom";
import bg from "../../assets/background/bg.avif";
import Button from "../../Components/Button/Button";
import { useFormik } from "formik";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      const res = await login(value.email, value.password);
      console.log(res);
    },
  });

  return (
    <div className="flex px-[10%] py-[6%] min-h-screen  flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative min-h-[70vh] ">
        <img
          src={bg}
          className="w-full absolute top-0 bottom-0 max-h-full"
          alt=""
        />
      </div>
      <div className="w-full flex justify-center items-center md:w-1/2">
        <div className="md:border md:shadow-sm my-auto rounded-md px-6 py-8">
          <h2 className="text-center text-3xl font-bold my-6">
            Sign In To Doc House
          </h2>
          <form onSubmit={formik.handleSubmit} className=" py-2">
            <label className="form-control w-full mx-auto max-w-xs">
              <div className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter Your Password"
                className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
              />
            </label>
            <div className="w-full  mx-auto mt-4 flex justify-center">
              <Button text="Sign In" width="width" type="secondary" />
            </div>
            <p className="text-center my-4">
              Don't have an account? Go to{" "}
              <Link to="/signup" className="text-secondary font-bold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
