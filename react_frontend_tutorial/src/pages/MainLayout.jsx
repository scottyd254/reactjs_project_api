import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <>
        <Navbar />
        < Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout