import { Link } from "react-router-dom";
import Logo from "../assets/TaskManagerPro2.png";
import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="container mx-auto px-2 lg:px-0 grid gap-6 md:grid-cols-3 footer p-10 text-neutral-content">
        {/* Website logo */}
        <div>
          {/* logo*/}
          <Link>
            <div className="flex items-center mb-6">
              <img className="h-6 md:h-10 lg:h-14" src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="flex items-center gap-4  text-lg">
            <span className="p-1 md:p-3 text-xl rounded-full bg-[#49525e] cursor-pointer ">
              <FaFacebook />
            </span>
            <span className="p-1 md:p-3 text-xl rounded-full bg-[#49525e] cursor-pointer ">
              <FaInstagram />
            </span>
            <span className="p-1 md:p-3 text-xl rounded-full bg-[#49525e] cursor-pointer ">
              <FaYoutube />
            </span>
          </div>
        </div>
        {/* Important links to visit */}
        <div>
          <h3 className="text-2xl font-semibold text-zinc-300 mb-6">Visit</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:ml-1 duration-300" href="#">
                - Home
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:ml-1 duration-300">
                - About Us
              </Link>
            </li>
            <li>
              <a className="hover:ml-1 duration-300" href="#">
                - Features
              </a>
            </li>
            <li>
              <a className="hover:ml-1 duration-300" href="#">
                - Join Us
              </a>
            </li>
          </ul>
        </div>
        {/* Follow on social media */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-zinc-300 mb-6">Get App</h3>
          <button className="flex items-center text-xl rounded-md gap-2 border py-3 px-5 w-full">
            <span className="text-4xl mr-2">
              <FaApple />
            </span>
            <p className="flex flex-col items-start">
              <span className="tex-2xl font-medium">App Store</span>
              <span className="text-sm">Available now on the</span>
            </p>
          </button>
          <button className="flex items-center text-xl rounded-md gap-2 border py-3 px-5 w-full">
            <span className="text-4xl mr-2">
              <FaGooglePlay />
            </span>
            <p className="flex flex-col items-start">
              <span className="tex-2xl font-medium">Google Play</span>
              <span className="text-sm">Get in on</span>
            </p>
          </button>
        </div>
      </footer>
      <div className="py-6 bg-[#27272A] ">
        <p className="text-center text-zinc-300 ">
          <small>
            @{new Date().getFullYear()} TaskManagerPro. All rights reserved
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
