import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return "Loading";
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      state={location.pathname ? location.pathname : ""}
    />
  );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
