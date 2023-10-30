import { BsStarFill } from "react-icons/bs";

const RecipeCard = ({ data }) => {
    const { recipe } = data;

    return (
        <>
            <div className="border-s-4">

                <div className="grid grid-cols-12">
                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-xl mt-2">
                            Recipe Name: {recipe?.first?.name}
                        </h2>
                        <div className="text-gray-500 font-black mt-2">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.first?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-2 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        1
                                    </span>{recipe?.first?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        2
                                    </span> {recipe?.first?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        3
                                    </span>{recipe?.first?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-6 flex items-center justify-center mt-3">
                                    <h2 className="flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            4
                                        </span>{recipe?.first?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-6 flex items-center mt-3">
                                    <h2 className="col-span-6 flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            5
                                        </span>{recipe?.first?.ingredients?.five}
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <img
                            className="rounded-md"
                            src={recipe?.first?.img}
                            alt="" />
                        <p className="mt-3 text-gray-500 font-semibold text-center text-base flex items-center justify-center">
                            <BsStarFill className="text-xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.first?.ratings}
                        </p>
                    </div>
                </div>
                <p
                    className=' mt-7 bg-gray-900 mx-4 py-3 text-white text-center rounded-xl font-semibold'>
                    Add To Favorite
                </p>

            </div>
            <div className="border-s-4 my-14">

                <div className="grid grid-cols-12">
                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-xl mt-2">
                            Recipe Name: {recipe?.first?.name}
                        </h2>
                        <div className="text-gray-500 font-black mt-2">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.first?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-2 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        1
                                    </span>{recipe?.first?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        2
                                    </span> {recipe?.first?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        3
                                    </span>{recipe?.first?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-6 flex items-center justify-center mt-3">
                                    <h2 className="flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            4
                                        </span>{recipe?.first?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-6 flex items-center mt-3">
                                    <h2 className="col-span-6 flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            5
                                        </span>{recipe?.first?.ingredients?.five}
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <img
                            className="rounded-md"
                            src={recipe?.first?.img}
                            alt="" />
                        <p className="mt-3 text-gray-500 font-semibold text-center text-base flex items-center justify-center">
                            <BsStarFill className="text-xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.first?.ratings}
                        </p>
                    </div>
                </div>
                <p
                    className=' mt-7 bg-gray-900 mx-4 py-3 text-white text-center rounded-xl font-semibold'>
                    Add To Favorite
                </p>

            </div>
            <div className="border-s-4 mb-12">

                <div className="grid grid-cols-12">
                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-xl mt-2">
                            Recipe Name: {recipe?.first?.name}
                        </h2>
                        <div className="text-gray-500 font-black mt-2">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.first?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-2 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        1
                                    </span>{recipe?.first?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        2
                                    </span> {recipe?.first?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-base">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                        3
                                    </span>{recipe?.first?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-6 flex items-center justify-center mt-3">
                                    <h2 className="flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            4
                                        </span>{recipe?.first?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-6 flex items-center mt-3">
                                    <h2 className="col-span-6 flex items-center text-base">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                                            5
                                        </span>{recipe?.first?.ingredients?.five}
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <img
                            className="rounded-md"
                            src={recipe?.first?.img}
                            alt="" />
                        <p className="mt-3 text-gray-500 font-semibold text-center text-base flex items-center justify-center">
                            <BsStarFill className="text-xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.first?.ratings}
                        </p>
                    </div>
                </div>
                <p
                    className=' mt-7 bg-gray-900 mx-4 py-3 text-white text-center rounded-xl font-semibold'>
                    Add To Favorite
                </p>

            </div>
        </>
    );
};

export default RecipeCard;