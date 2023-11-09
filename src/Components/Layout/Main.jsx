import { Outlet } from "react-router-dom";
import NavBar from "../Pages/HomePage/NavBar/NavBar";
import Footer from "../Pages/HomePage/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;