import { Link } from "react-router-dom";

const SingleRecommended = ({ data }) => {
    const { chefImg, name, experience } = data;

    return (
        <div
            className="group mt-4 lg:mt-10 mx-2 lg:mx-4 bg-gray-50 shadow-xl h-fit py-1 rounded-2xl">

            <div className="flex px-4 py-2">
                <div className="w-[30%]">
                    <img
                        className="rounded-lg flex items-center justify-center"
                        src={chefImg}
                        alt="" />
                </div>

                <div
                    className="text-sm font-black ms-5">

                    <h2 className="text-xl">{name}</h2>
                    <div className="text-gray-500 font-bold">
                        <p className="mt-1">Experience: {experience}</p>
                        <p>Numbers of recipes: 3+</p>

                        <p
                            className="border-2 font-black rounded-lg group-hover:bg-gray-900 group-hover:text-white duration-500 mt-2 text-xs">
                            <Link
                                to={"/"}
                                className="flex items-center justify-center py-1 w-full">
                                View Details
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecommended;