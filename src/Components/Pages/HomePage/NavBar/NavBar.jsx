import { Link } from "react-router-dom";
import logo from "../../../../../public/logo.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useAuth from "../../../Utilites/Hooks/useAuth";

const NavBar = () => {
    const { user, userLogOut } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // logoutHandle function
    const logoutHandle = () => {
        userLogOut()
            .then(result => {
            })
            .catch(error => {
                // console.log(error);
            })
    };


    return (
        <div>

            {/* lg device start */}
            <div className="w-full fixed z-30 top-0 bg-white bg-opacity-95">
                <div className="container mx-auto hidden lg:block ">

                    {/* lg navbar section start */}
                    <div
                        className="grid grid-cols-12 py-1">

                        <div className="col-span-2 flex items-center  justify-center">
                            <Link
                                to={"/"}
                                className="w-[150px] py-2 px-4 rounded-lg">
                                <img
                                    src={logo}
                                    alt="" />
                            </Link>
                        </div>

                        <div
                            className="col-span-9 flex items-center justify-end text-gray-500 font-black">

                            <p
                                className="mx-5 flex items-center">
                                Solutions <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" />
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                Features <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" />
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                Blogs <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" />
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                About <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" />
                            </p>

                        </div>
                        {/* lg navbar section end */}


                        {/* conditional rendering for user and login start */}
                        <div className="col-span-1 flex items-center justify-end">
                            {
                                user ?
                                    <>

                                        {/* tooltip show and the profile picture */}
                                        <div
                                            className="tooltip tooltip-warning tooltip-bottom flex justify-center items-center font-bold"
                                            data-tip={user.displayName}>
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src=
                                                {
                                                    user?.photoURL
                                                }
                                                alt="" />
                                        </div>
                                        <p className="text-lg">
                                            <Link
                                                // onClick={handleLogOut}
                                                className="btn-ghost">
                                                Log Out
                                                {/* <FiLogOut
                                                className="text-2xl text-slate-200">
                                            </FiLogOut> */}
                                            </Link>
                                        </p>
                                    </>
                                    :
                                    <>
                                        <p>
                                            <Link
                                                to="/login"
                                                className="text-yellow-500 font-bold rounded-lg border-2 border-yellow-500 px-5 py-2 mr-4">
                                                Log In
                                                {/* <FiLogIn
                                                className="text-2xl text-slate-200">
                                            </FiLogIn> */}
                                            </Link>
                                        </p>
                                    </>
                            }
                        </div>

                        {/* conditional rendering for user and login end */}

                    </div>
                </div>
            </div>
            {/* lg device end */}


            {/* sm device start */}

            <div
                className="lg:hidden block">
                <div
                    className="cursor-pointer grid grid-cols-12 items-center py-1">
                    <div
                        onClick={toggleMenu}
                        className="col-span-2 flex items-starts justify-center">
                        <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />
                    </div>
                    <Link
                        to={"/"}
                        className="col-span-8 flex items-center justify-center">
                        <img
                            className="w-[140px]"
                            src={logo}
                            alt="" />
                    </Link>
                    <div className="col-span-2 mr-1">
                        <p
                            className="text-[#0076CE] font-bold rounded-lg border-2 border-blue-500 py-2 w-full text-center text-xs">
                            Login
                        </p>
                    </div>
                    <div
                        className={
                            menuOpen ?
                                "fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-gray-950"
                                :
                                "fixed left-[-100%] top-0 p-10 sm:hidden h-screen ease-in-out duration-500"
                        }>
                        {/* cross sine */}
                        <div
                            className="flex w-full items-center justify-between">
                            <div>
                                <Link className="/">
                                    <img
                                        className="w-[138px]"
                                        src={logo}
                                        alt="" />
                                </Link>
                            </div>
                            <div
                                onClick={toggleMenu}
                                className="cursor-pointer">
                                <IoMdCloseCircleOutline className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        {/* mobile device menu */}
                        <div
                            className="flex-col py-3 font-medium text-white mt-4">
                            <ul>
                                <li
                                    className="py-3 hover:underline">
                                    <Link>
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link>
                                        Solutions
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link>
                                        Features
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link>
                                        Blogs
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <Link>
                                        About
                                    </Link>
                                </li>

                                <div className="mt-6 grid grid-rows-2 gap-4">
                                    <p
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm">
                                        Login
                                    </p>
                                    <p
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm bg-white text-black">
                                        Register
                                    </p>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* sm device end */}

        </div>
    );
};

export default NavBar;