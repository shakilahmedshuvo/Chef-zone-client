import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ChefSingleCard = ({ data }) => {
    const { chefImg, name, experience, likes, _id } = data;
    // console.log(data);

    return (
        <div className="mx-4 my-6 group group/item">

            {/* img start */}
            <div className="overflow-hidden rounded-lg">
                <img
                    className="w-full duration-500 cursor-pointer group-hover:scale-105 transition"
                    src={chefImg}
                    alt="" />
            </div>
            {/* img end */}

            {/* text div start */}
            <div className="border-s-4 mt-5">

                <div className="mx-3 mt-4">
                    <h2 className="text-3xl font-bold text-yellow-400">
                        {name}
                    </h2>

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

                    {/* recommended section start */}
                    <div className="flex items-center justify-end">
                        <p
                            className='rounded-full px-5 py-2 text-white text-center bg-yellow-400 font-black w-fit text-sm'>
                            Recommended
                        </p>
                    </div>
                    {/* recommended section end */}

                    <Link
                        to={`/chefCollection/${_id}`}>
                        <p
                            className='bg-gray-900 hover:bg-gray-800 text-white font-black w-full text-center py-4 rounded-lg mt-7'>
                            View Recipes
                        </p>
                    </Link>

                </div>

            </div>
            {/* text div end */}
        </div>
    );
};

export default ChefSingleCard;