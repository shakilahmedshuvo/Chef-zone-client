import { Link } from "react-router-dom";
import SocialLogin from "../../Utilites/Shared/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
    // show pass and hide pass
    const [show, setShow] = useState();

    return (
        <div className="max-w-7xl mx-auto pt-14 lg:pt-0">

            <div className="grid lg:grid-cols-12">

                {/* login img section start */}
                <div className="col-span-6 lg:block hidden">
                    <img
                        className="w-full mt-14"
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-2650.jpg?w=740&t=st=1683208571~exp=1683209171~hmac=cc47183fe85add8c4b0d73b8239c0d1c73570ec7773d5f9753e524c0ca3875df"
                        alt="" />
                </div>
                {/* login img section end */}


                {/* login text section start */}
                <form
                    // onSubmit={handleUserLogin}
                    className="col-span-12 lg:col-span-6 lg:mt-24">
                    <h2 className="text-yellow-400 text-2xl lg:text-4xl font-black text-center">
                        Please Register
                    </h2>

                    {/* input field section start */}
                    <div className="font-black lg:ms-44">

                        {/* name start */}
                        <div className="form-control text-gray-600 mt-6">
                            <label
                                className="label ps-7 lg:ps-0">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Name *
                                </span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                // ref={emailRef}
                                placeholder="Enter Name"
                                className="input input-bordered h-fit w-80 ps-5 pr-2 py-1 rounded-md mx-auto lg:mx-0"
                                required />
                        </div>
                        {/* name end */}

                        {/* email start */}
                        <div className="form-control text-gray-600 mt-2">
                            <label
                                className="label ps-7 lg:ps-0">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Email Address *
                                </span>
                            </label>
                            <input
                                name="email"
                                type="text"
                                // ref={emailRef}
                                placeholder="Enter Email"
                                className="input input-bordered h-fit w-80 ps-5 pr-2 py-1 rounded-md mx-auto lg:mx-0"
                                required />
                        </div>
                        {/* email end */}

                        {/* photoURL start */}
                        <div className="form-control text-gray-600 mt-2">
                            <label
                                className="label ps-7 lg:ps-0">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Photo URL
                                </span>
                            </label>
                            <input
                                name="photo"
                                type="text"
                                // ref={emailRef}
                                placeholder="Enter Photo URL"
                                className="input input-bordered h-fit w-80 ps-5 pr-2 py-1 rounded-md mx-auto lg:mx-0"
                            // required 
                            />
                        </div>
                        {/* photoURL end */}

                        {/* password start */}
                        <div className="form-control text-gray-600 mt-3">
                            <label
                                className="label ps-7 lg:ps-0">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Password *
                                </span>
                            </label>
                            <input
                                name="email"
                                type={show ?
                                    'text'
                                    :
                                    'password'
                                }
                                // ref={emailRef}
                                placeholder="Enter Password"
                                className="input input-bordered h-fit w-80 ps-5 pr-2 py-1 rounded-md mx-auto lg:mx-0"
                                required />
                        </div>
                        <div
                            className="relative bottom-14 right-28 flex items-center justify-end">
                            <p
                                onClick={() => setShow(!show)}
                                className="relative top-7 right-9 text-2xl px-6 py-1 flex items-center h-6 cursor-pointer">
                                <small>
                                    {
                                        show ?
                                            <span>
                                                <FaEyeSlash />
                                            </span>
                                            :
                                            <span>
                                                <FaEye />
                                            </span>
                                    }
                                </small>
                            </p>
                        </div>
                        {/* password end */}

                        <div className="flex items-center text-xs mb-2 ps-7 lg:ps-0">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-xs" />
                            <p className="font-black ms-2 text-gray-500">
                                Accept <Link className="text-black">Terms and Conditions</Link>
                            </p>
                        </div>


                        {/* submit btn start */}
                        <div
                            type="submit"
                            className="w-80 bg-yellow-400 text-white hover:bg-yellow-500 text-lg text-center py-1 rounded-md duration-300 cursor-pointer mx-auto lg:mx-0">
                            Login
                        </div>
                        {/* submit btn end */}

                    </div>
                    {/* input field section end */}

                    {/* social login start*/}
                    <div className="lg:ms-9">

                        {/* or div start */}
                        <div className="flex items-center justify-center mt-2 mb-3">
                            <div className="grid grid-cols-12 w-80">
                                <div className="col-span-5 mt-4">
                                    <hr className="border border-gray-300" />
                                </div>
                                <div className="col-span-2 flex items-center justify-center text-gray-500 font-black text-lg">
                                    or
                                </div>
                                <div className="col-span-5 mt-4">
                                    <hr className="border border-gray-300" />
                                </div>
                            </div>
                        </div>
                        {/* or div end */}

                        {/* social login start */}
                        <SocialLogin />
                        {/* social login end */}

                        {/* register section start */}
                        <div
                            className="text-sm text-center mt-2 font-black text-gray-500 lg:mb-10">
                            Already Have an Account? <Link to={"/login"} className="text-yellow-400 underline">Login</Link>
                        </div>
                        {/* register section end */}

                    </div>
                    {/* social login end*/}

                </form>

            </div>
            {/* login text section end */}

        </div>
    );
};

export default Register;