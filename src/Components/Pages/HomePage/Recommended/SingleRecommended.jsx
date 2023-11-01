import { Link } from "react-router-dom";

const SingleRecommended = ({ data }) => {
    const { chefImg, name, experience, recipe } = data;

    return (
        <div
            className="mt-10 mx-4 bg-gray-50 shadow-xl h-fit py-2 pb-6 rounded-2xl">
            <div className="flex px-4 py-4">
                <div className="w-[35%]">
                    <img
                        className="rounded-lg flex items-center justify-center"
                        src={chefImg}
                        alt="" />
                </div>

                <div
                    className="text-base font-black ms-5 mt-1">

                    <h2 className="text-2xl">{name}</h2>
                    <div className="text-gray-500 font-bold">
                        <p className="mt-2">Experience: {experience}</p>
                        <p>Numbers of recipes: 3+</p>
                        <p className="text-sm mt-1">
                            Top Recipe's: {recipe?.first?.name}
                        </p>
                    </div>

                </div>

            </div>


            <p className="border-2  font-black rounded-lg mx-4">
                <Link
                    to={"/"}
                    className="flex items-center justify-center py-2 w-full">
                    View Details
                </Link>
            </p>
        </div>
    );
};

export default SingleRecommended;