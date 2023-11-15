import SectionTitle from "../../Shared/SectionTitle";
import imageOFDishes from "../../../../assets/image-12.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const DishOfTheWeek = () => {
    return (
        <div>
            <>
                <SectionTitle
                    heading={"Dish Of The Week"}
                    subHeading={"Seirokom Grill"}
                ></SectionTitle>
            </>

            {/* parallax section start */}
            <div className="mt-10">
                <img
                    className="absolute w-full"
                    src="https://bunch.asiandevelopers.com/wp/radhuni/wp-content/themes/radhuni/images/icons/divider-2.png"
                    alt="" />
            </div>
            <div className='parallaxImg bg-fixed mb-16'>

                {/* parallax main div section start */}
                <div className='h-full w-full bg-[rgba(0,0,0,.1)] flex items-center justify-center'>
                    <div className="w-1/2 grid grid-cols-2">

                        <div className="bg-white h-full w-full">

                            <div className="px-10">
                                <h2
                                    className="text-yellow-400 text-4xl mt-10">
                                    Seirokom Grill
                                </h2>
                                <p
                                    className="text-gray-500 font-semibold mt-3 text-sm">
                                    DISH OF THE WEEK
                                </p>

                                <hr className="border-2 w-[50%] mt-2" />

                                <p className="text-gray-500 font-medium mt-8">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s stan
                                </p>

                                <p className="flex text-yellow-400 mt-3 text-lg">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                </p>
                            </div>

                            <hr className="mt-6" />

                        </div>

                        <div>
                            <img
                                src={imageOFDishes}
                                alt="" />
                        </div>

                    </div>
                </div>
                {/* parallax main div section end */}

            </div>
            {/* parallax section end */}

        </div>
    );
};

export default DishOfTheWeek;