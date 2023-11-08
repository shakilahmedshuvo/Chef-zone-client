import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <>
            <h2 className="text-center text-2xl font-black text-yellow-400">
                Sign In With
            </h2>

            <div className="grid grid-cols-12 mt-2">

                {/* google login start */}
                <div className="col-span-6 flex items-center justify-end pr-5">
                    <FcGoogle
                        // onClick={handleGoogleSignIn}
                        className='text-5xl' />
                    <p
                        className='font-black text-gray-500 text-xl ms-3'>
                        Google
                    </p>
                </div>
                {/* google login end */}

                {/* github login start */}
                <div className="col-span-6 flex items-center ps-5">
                    <FaGithub
                        // onClick={gitHubLogin}
                        className='text-4xl' />
                    <p
                        className='font-black text-gray-500 text-xl ms-3'>
                        Git Hub
                    </p>
                </div>
                {/* github login end */}

            </div>
        </>
    );
};

export default SocialLogin;