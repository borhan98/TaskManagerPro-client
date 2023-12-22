import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import PropTypes from "prop-types";
import mainLogo from "../assets/TaskManagerPro.png";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import Footer from "../Pages/Footer";

const Main = ({ children }) => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  // handle logout user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("You have logged out", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200 py-4">
          <div className="container mx-auto px-2 lg:px-0">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <Link to={"/"}>
                <img className="h-6 md:h-10 lg:h-14" src={mainLogo} alt="Logo" />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <Navbar />
              </ul>
            </div>
            {!user ? (
              <Link to={"/login"} className="border border-[#E96A04] py-1 md:py-2 px-1 md:px-3 rounded-md text-zinc-700">Sign In</Link>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border border-[#E96A04] hover:border-none ">
                    <img
                      alt="Profile Picture"
                      src={
                        user
                          ? user.photoURL
                          : "https://i.ibb.co/JCVpNzQ/user.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-48 md:w-60 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Navbar />
        </ul>
      </div>
    </div>
  );
};

export default Main;
Main.propTypes = {
  children: PropTypes.node,
};
