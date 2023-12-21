import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#E96A04] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";

  return (
    <>
      <NavLink className={activeRoute} to={"/"}>
        Home
      </NavLink>
      {user && (
        <NavLink className={activeRoute} to={"/dashboard"}>
          Dashboard
        </NavLink>
      )}
    </>
  );
};

export default Navbar;
