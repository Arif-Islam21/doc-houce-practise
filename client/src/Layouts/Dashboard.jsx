import Navbar from "../Components/Navbar/Navbar";

const Dashboard = () => {
  const navItems = ["Home", "About", "Appoinment", "Reviews", "Contact-Us"];
  return (
    <div>
      <Navbar navItems={navItems} />
      <h2>This is dashboard</h2>
    </div>
  );
};

export default Dashboard;
