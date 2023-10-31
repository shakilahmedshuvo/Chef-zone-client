import { PiStarDuotone } from "react-icons/pi";

const RecipeCard = ({ data }) => {
    const { recipe } = data;

    return (
        <div className="mx-5">

            {/* first RecipeCard start  */}
            <div className="border-s-4 mt-10 group group/item">

                <div className="grid grid-cols-12">

                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-2xl mt-3">
                            Recipe Name: {recipe?.first?.name}
                        </h2>

                        <div className="text-gray-500 font-black mt-3">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.first?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-3 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        1
                                    </span>{recipe?.first?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        2
                                    </span> {recipe?.first?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        3
                                    </span>{recipe?.first?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            4
                                        </span>{recipe?.first?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            5
                                        </span>{recipe?.first?.ingredients?.five}
                                    </h2>
                                </div>

                                {/* 6 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            6
                                        </span>{recipe?.first?.ingredients?.six}
                                    </h2>
                                </div>

                            </div>
                        </div>

                        <p className="text-gray-500 font-semibold text-center text-base flex items-center mt-8">
                            <PiStarDuotone className="text-2xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.first?.ratings}
                        </p>
                    </div>


                    <div className="col-span-4">

                        <img
                            className="rounded-md mt-4"
                            src={recipe?.first?.img}
                            alt="" />
                        <p
                            className='mt-5 border-2 py-3 text-gray-900 text-center rounded-xl font-black group-hover:bg-gray-700 group-hover:text-white duration-500'>
                            Add To Favorite
                        </p>
                    </div>
                </div>

            </div>
            {/* first RecipeCard end */}


            {/* second RecipeCard start */}
            <div className="border-s-4 my-14 group group/item">

                <div className="grid grid-cols-12">

                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-2xl mt-3">
                            Recipe Name: {recipe?.second?.name}
                        </h2>
                        <div className="text-gray-500 font-black mt-3">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.second?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-3 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        1
                                    </span>{recipe?.second?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        2
                                    </span> {recipe?.second?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        3
                                    </span>{recipe?.second?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            4
                                        </span>{recipe?.second?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            5
                                        </span>{recipe?.second?.ingredients?.five}
                                    </h2>
                                </div>

                                {/* 6 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            6
                                        </span>{recipe?.second?.ingredients?.six}
                                    </h2>
                                </div>


                            </div>
                        </div>

                        <p className="text-gray-500 font-semibold text-center text-base flex items-center mt-8">
                            <PiStarDuotone className="text-2xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.second?.ratings}
                        </p>

                    </div>


                    <div className="col-span-4">

                        <img
                            className="rounded-md mt-4"
                            src={recipe?.second?.img}
                            alt="" />
                        <p
                            className='mt-5 border-2 py-3 text-gray-900 text-center rounded-xl font-black group-hover:bg-gray-700 group-hover:text-white duration-500'>
                            Add To Favorite
                        </p>
                    </div>
                </div>

            </div>
            {/* second RecipeCard end */}

            {/* third RecipeCard start */}
            <div className="border-s-4 mb-16 group group/item">

                <div className="grid grid-cols-12">

                    <div className="col-span-8 px-4">
                        <h2 className="text-yellow-400 font-bold text-2xl mt-3">
                            Recipe Name: {recipe?.third?.name}
                        </h2>
                        <div className="text-gray-500 font-black mt-3">
                            Cooking Method:
                            <br />
                            <p className="ms-3 pr-1 mt-1 text-sm">
                                {recipe?.third?.method}
                            </p>
                        </div>

                        <div className="text-gray-500 mt-3 font-black">
                            Ingredients:
                            <div className="grid grid-cols-12 mt-3 px-4">

                                {/* 1 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        1
                                    </span>{recipe?.third?.ingredients?.one}
                                </h2>

                                {/* 2 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        2
                                    </span> {recipe?.third?.ingredients?.two}
                                </h2>

                                {/* 3 */}
                                <h2 className="col-span-4 flex items-center text-sm">
                                    <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                        3
                                    </span>{recipe?.third?.ingredients?.three}
                                </h2>

                                {/* 4 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            4
                                        </span>{recipe?.third?.ingredients?.four}
                                    </h2>
                                </div>

                                {/* 5 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            5
                                        </span>{recipe?.third?.ingredients?.five}
                                    </h2>
                                </div>

                                {/* 6 */}
                                <div className="col-span-4 flex items-center mt-4">
                                    <h2 className="flex items-center text-sm">
                                        <span className="bg-gray-400 text-center text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                            6
                                        </span>{recipe?.third?.ingredients?.six}
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <p className="text-gray-500 font-semibold text-center text-base flex items-center mt-8">
                            <PiStarDuotone className="text-2xl mr-1 text-yellow-400" /> Recipe's Ratings:   {recipe?.third?.ratings}
                        </p>
                    </div>


                    <div className="col-span-4">

                        <img
                            className="rounded-md mt-4"
                            src={recipe?.third?.img}
                            alt="" />
                        <p
                            className='mt-5 border-2 py-3 text-gray-900 text-center rounded-xl font-black group-hover:bg-gray-700 group-hover:text-white duration-500'>
                            Add To Favorite
                        </p>
                    </div>
                </div>

            </div>
            {/* third RecipeCard end */}

        </div>
    );
};

export default RecipeCard;