import { NavLink, useNavigate } from "react-router-dom";
import LoggedUser from "../../Components/LoggedUser";
import { GoTasklist } from "react-icons/go";
import { RiCalendarTodoLine } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  // handle logout
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

  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#E96A04] py-2 px-3 rounded-md text-white hover:bg-[#E96A04]"
      : "py-2 px-3 rounded-md";

  return (
    <div className="h-fit rounded-b-md bg-base-200 py-10">
      <LoggedUser />
      <div className="divider"></div>
      {/* Menus */}
      <ul className="menu md:menu-md rounded-box">
        <li>
          <NavLink className={activeRoute} to={"dashboard"}>
            <GoTasklist className="text-xl" />{" "}
            <span className="ml-2">All Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={activeRoute} to={"/dashboard/todos"}>
            <RiCalendarTodoLine className="text-xl" />{" "}
            <span className="ml-2">ToDo</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={activeRoute} to={"/dashboard/ongoing"}>
            <AiOutlineLoading3Quarters className="text-xl" />{" "}
            <span className="ml-2">On Going</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={activeRoute} to={"/dashboard/completed"}>
            <MdDone className="text-xl" />{" "}
            <span className="ml-2">Completed</span>
          </NavLink>
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="menu md:menu-md rounded-box">
        <li>
          <NavLink className={activeRoute} to={"/"}>
            <FaHome className="text-xl" /> <span className="ml-2">Home</span>
          </NavLink>
        </li>
        <li>
          <a onClick={handleLogout}>
            <IoMdLogOut className="text-xl" />{" "}
            <span className="ml-2">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
