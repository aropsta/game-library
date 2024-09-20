import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

//Layout file for react router
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
