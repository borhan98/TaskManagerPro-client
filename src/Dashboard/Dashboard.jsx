import { Outlet } from "react-router-dom";
import Sidebar from "./DashboardPages/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto px-2 lg:px-0 flex">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
