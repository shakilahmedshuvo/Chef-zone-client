import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Utilites/Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../../Utilites/Shared/SocialLogin";
import toast from "react-hot-toast";

const Login = () => {
    // show pass and hide pass
    const [show, setShow] = useState();

    const { userLogIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handleLogin
    const handleUserLogin = (event) => {
        // stop reloading
        event.preventDefault();
        // get the info
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogIn(email, password)
            .then(result => {
                const login = result.user;
                console.log(login);
                navigate(from, { replace: true })
                toast.success('Your Login Successful')
            })
            .catch(error => {
                console.log(error);
            })
        // reset the form 
        form.reset();
    };

    return (
        <div className="max-w-7xl mx-auto pt-12 lg:pt-0">

            <div className="grid lg:grid-cols-12">

                {/* login img section start */}
                <div className="col-span-6 lg:block hidden">
                    <img
                        className="w-full pt-14"
                        src="https://img.freepik.com/premium-vector/flat-illustration-design-cybersecurity_9206-2585.jpg?w=740"
                        alt="" />
                </div>
                {/* login img section end */}


                {/* login text section start */}
                <form
                    onSubmit={handleUserLogin}
                    className="col-span-12 lg:col-span-6 mt-6 lg:mt-36">
                    <h2 className="text-yellow-400 text-2xl lg:text-4xl font-black text-center">
                        Please Login
                    </h2>

                    {/* input field section start */}
                    <div className="font-black lg:ms-44">

                        {/* email start */}
                        <div
                            className="form-control text-gray-600 mt-6">
                            <label
                                className="label ps-10 w-80">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Email Address
                                </span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered h-fit w-80 ps-5 pr-2 py-1 rounded-md mx-auto lg:mx-0"
                                required />
                        </div>
                        {/* email end */}

                        {/* password start */}
                        <div
                            className="form-control text-gray-600 lg:mt-3">
                           <label
                                className="label ps-10 w-80">
                                <span
                                    className="text-gray-500 font-black text-sm">
                                    Enter Your Password
                                </span>
                            </label>
                            <input
                                name="password"
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
                            className="relative bottom-14 lg:right-28 flex items-center justify-end">
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


                        {/* submit btn start */}
                        <div
                            type="submit"
                            className="w-80 bg-yellow-400 text-white hover:bg-yellow-500 text-lg text-center py-1 rounded-md duration-300 cursor-pointer mx-auto lg:mx-0 form-control">
                            <button>Login</button>
                        </div>
                        {/* submit btn end */}

                    </div>

                    {/* input field section end */}

                    {/* social login start*/}
                    <div className="lg:ms-9 mt-3">

                        {/* or div start */}
                        <div className="flex items-center justify-center mt-5 mb-3">
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
                            className="text-sm text-center mt-4 font-black text-gray-500">
                            Dont Have an Account? New to CHEF ZONE?
                            <br />
                            Please <Link className="text-yellow-400 underline hover:text-yellow-500 duration-300" to={"/register"}>Register</Link>
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

export default Login;