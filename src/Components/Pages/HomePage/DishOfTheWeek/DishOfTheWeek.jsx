import SectionTitle from "../../Shared/SectionTitle";
import imageOFDishes from "../../../../assets/image-12.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import plateOne from "../../../../assets/plate/plateOne.png";
import plateTwo from "../../../../assets/plate/plateTwo.png";
import plateThree from "../../../../assets/plate/plateThree.png";
import plateFour from "../../../../assets/plate/plateFour.png";
import plateFive from "../../../../assets/plate/plateFive.png";
import plateSix from "../../../../assets/plate/plateSix.png";

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
                    className="absolute w-full hidden lg:block"
                    src="https://bunch.asiandevelopers.com/wp/radhuni/wp-content/themes/radhuni/images/icons/divider-2.png"
                    alt="" />
            </div>
            <div className='parallaxImg bg-fixed mb-16'>

                {/* parallax main div section start */}
                <div className='h-full w-full bg-[rgba(0,0,0,.1)] flex items-center justify-center'>
                    <div className="lg:w-1/2 grid grid-cols-12">

                        <div className="bg-white h-full w-full col-span-12 lg:col-span-6">

                            <div className="px-4 lg:px-10">
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

                            <hr className="mt-10" />

                            {/* swiper section start */}
                            <div
                                className="px-12 mt-5">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    autoplay={{
                                        delay: 700,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        620: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        }
                                        ,
                                        840: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        }
                                    }}>

                                    <SwiperSlide>
                                        <img
                                            src={plateOne}
                                            alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={plateTwo}
                                            alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={plateThree}
                                            alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={plateFour}
                                            alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={plateFive}
                                            alt="" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img
                                            src={plateSix}
                                            alt="" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            {/* swiper section end */}


                        </div>

                        <div className="lg:block hidden col-span-6">
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