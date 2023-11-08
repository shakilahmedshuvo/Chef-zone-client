import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google login function
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const google = result.user;
                console.log(google);
                navigate(from, { replace: true })
                // todo react hot toast

            })
            .catch(error => {
                console.log(error);
            })
    }

    // git hub login function
    const gitHubLogin = () => {
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const git = result.user;
                console.log(git);
                navigate(from, { replace: true })
                // todo react hot toast

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <>
            <h2 className="text-center text-2xl font-black text-yellow-400">
                Sign In With
            </h2>

            <div className="grid grid-cols-12 mt-2">

                {/* google login start */}
                <div
                    onClick={handleGoogleSignIn}
                    className="col-span-6 flex items-center justify-end pr-5">
                    <FcGoogle
                        className='text-4xl' />
                    <p
                        className='font-black text-gray-500 text-lg ms-2'>
                        Google
                    </p>
                </div>
                {/* google login end */}

                {/* github login start */}
                <div
                    onClick={gitHubLogin}
                    className="col-span-6 flex items-center ps-5">
                    <FaGithub

                        className='text-3xl' />
                    <p
                        className='font-black text-gray-500 text-lg ms-2'>
                        Git Hub
                    </p>
                </div>
                {/* github login end */}

            </div>
        </>
    );
};

export default SocialLogin;