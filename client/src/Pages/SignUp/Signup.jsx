import { Link } from "react-router-dom";
import bg from "../../assets/background/bg.avif";
import Button from "../../Components/Button/Button";
import useAuth from "../../Hooks/useAuth";
import { useFormik } from "formik";
import useUploadImage from "../../Hooks/useUploadImage";
import { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Toast from "react-hot-toast";

const Signup = () => {
  const { signUp, updateUser } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { uploadImage, imageUrl, error, loading } = useUploadImage();
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = await uploadImage(file);
      console.log(imageUrl);
      if (url) {
        setUploadedUrl(url);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      image: [],
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { name, email } = values;
        const res = await signUp(values.email, values.password);
        if (res.uid) {
          const updatedRes = await updateUser(name, uploadedUrl);
          console.log(updatedRes);
        }

        const userData = {
          name,
          email,
          badge: "user",
          image: uploadedUrl,
        };
        const { data } = await axiosCommon.post("/users", userData);

        if (data.insertedId) {
          Toast.success("User Created successfully");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex px-[10%] py-[6%] min-h-screen  flex-col md:flex-row">
      {error && <p>{error}</p>}
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
        <form onSubmit={formik.handleSubmit} className="py-2">
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Name</span>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter Your Name"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">
                Pick Your Image
              </span>
            </div>
            <input
              type="file"
              id="image"
              name="image"
              value={formik.values.image}
              onChange={(event) => {
                handleFileUpload(event);
              }}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Your Password"
              className="input w-full placeholder:text-white placeholder:font-bold bg-gray-300 max-w-xs"
            />
          </label>
          <div className="w-full lg:w-3/4 mx-auto mt-4 flex justify-center">
            {loading ? (
              <button className="btn w-full bg-primary text-white">
                Uploading Image
                <span className="text-xl animate-pulse">
                  <TbPhotoSquareRounded />
                </span>
              </button>
            ) : (
              <Button text="Create Account" width="width" type="secondary" />
            )}
          </div>
          <p className="text-center my-4">
            Already Registered? Go to{" "}
            <Link to="/Login" className="text-secondary font-bold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
