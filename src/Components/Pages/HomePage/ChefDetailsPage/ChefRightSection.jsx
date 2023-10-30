import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Rating from "react-rating";

const ChefRightSection = ({ data }) => {
    const { chefImg, name, experience, recipe, likes, bio, img } = data;

    return (
        <>
            <h2 className="text-3xl text-gray-500 font-semibold text-center">
                Chef Details:
            </h2>

            <hr className="my-6 border-t-2" />

            <img
                className="rounded-lg"
                src={chefImg}
                alt="" />
            <h2 className="text-2xl text-gray-500 font-semibold mt-5">
                Chef Name:{name}
            </h2>
            <div className="border-s-4 ps-4 mt-2">

                <p className="text-gray-500 font-semibold text-sm pt-2 leading-6">
                    {bio}
                </p>

                <div className="flex justify-between items-center ms-1 mt-4">
                    <p className="text-base font-semibold text-gray-500">
                        Experience: {experience}
                    </p>
                    <p className="text-base font-semibold text-gray-500">
                        Numbers of recipes: 3+
                    </p>
                </div>

                <>

                    {/* rating section start */}
                    <div className='flex items-center text-gray-500 mt-3'>
                        <Rating
                            className='text-3xl mb-2'
                            stop={1}
                            emptySymbol={<FcLikePlaceholder />}
                            placeholderSymbol={<FcLikePlaceholder />}
                            fullSymbol={<FcLike />}
                        ></Rating>
                        <p
                            className='text-lg font-bold mb-3 ms-2'>
                            Likes - {likes}
                        </p>
                    </div>
                    {/* rating section end */}

                </>
            </div>
            <div
                className='bg-gray-900 hover:bg-gray-800 text-white font-black w-full text-center py-4 rounded-lg mt-5 mb-10'>
                View Recipes
            </div>
        </>
    );
};

export default ChefRightSection;