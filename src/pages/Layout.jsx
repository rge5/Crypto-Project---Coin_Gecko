import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar /> // This navbar is a shared ui we wanted to across pages
      <Outlet /> // The actual page which will be rendered along with the navbar
    </>
  )
}

export default MainLayout;
