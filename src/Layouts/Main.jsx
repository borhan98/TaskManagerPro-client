import { Link } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import PropTypes from "prop-types";
import mainLogo from "../assets/TaskManagerPro.png";

const Main = ({ children }) => {
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
                <img className="h-14" src={mainLogo} alt="Logo" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <Navbar />
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
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