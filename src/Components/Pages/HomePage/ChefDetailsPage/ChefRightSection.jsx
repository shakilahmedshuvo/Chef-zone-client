import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Rating from "react-rating";

const ChefRightSection = ({ data }) => {
    const { chefImg, name, experience, likes, bio } = data;

    return (
        <>
            <h2 className="text-3xl text-gray-500 font-semibold text-center">
                Chef Details:
            </h2>
            <p className="text-base mt-4 font-semibold text-gray-500 px-4">
                We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important.
            </p>

            <hr className="my-6 border-t-2" />

            <img
                className="rounded-lg px-14 lg:px-0"
                src={chefImg}
                alt="" />
            <h2 className="text-2xl text-yellow-400 font-semibold mt-6 ms-1">
                Chef Name: {name}
            </h2>
            <div className="border-s-4 lg:ps-4 lg:mt-3">

                <p className="text-gray-500 font-semibold text-sm pt-2 leading-6 px-2 lg:px-0">
                    {bio}
                </p>

                <div className="flex justify-between items-center lg:ms-1 mt-4 mx-3 lg:mx-0">
                    <p className="text-base font-semibold text-gray-500">
                        Experience: {experience}
                    </p>
                    <p className="text-base font-semibold text-gray-500">
                        Numbers of recipes: 3+
                    </p>
                </div>

                <>

                    {/* rating section start */}
                    <div className='flex items-center justify-center  lg:justify-start text-gray-500 mt-3'>
                        <Rating
                            className='text-4xl mb-2'
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
            <div className="lg:px-0 px-4">
                <div
                    className='bg-gray-900 hover:bg-gray-800 text-white font-black w-full text-center py-4 rounded-lg lg:mt-5 mb-10'>
                    View Recipes
                </div>
            </div>
        </>
    );
};

export default ChefRightSection;