import { CiLocationArrow1, CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="hero bg-primary my-6 rounded-md min-h-[70vh]">
      <div className="hero-content w-full md:px-16 flex-col lg:flex-row">
        <div className="text-center w-full md:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Contact With Us</h1>
          <p className="py-6 max-w-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <p className="flex items-center gap-4">
            <CiPhone className="text-3xl" />
            <span>+088 0183 3668024</span>
          </p>
          <p className="flex items-center gap-4">
            <CiLocationArrow1 className="text-3xl" />
            <span>Nilphamari Sadar, Bangladesh</span>
          </p>
        </div>
        <div className="card bg-base-100 w-full md:w-2/3 shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
