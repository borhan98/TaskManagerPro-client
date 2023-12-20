import { Outlet } from "react-router-dom";
import Main from "./Layouts/Main";

const Root = () => {
  return (
    <Main>
      <div>
        <Outlet />
      </div>
    </Main>
  );
};

export default Root;
