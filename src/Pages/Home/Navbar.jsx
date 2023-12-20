import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#E96A04] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";

  return (
    <>
      <NavLink className={activeRoute} to={"/"}>Home</NavLink>
      <NavLink className={activeRoute} to={"/login"}>SignIn</NavLink>
    </>
  );
};

export default Navbar;
