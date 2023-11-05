// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerBgOne from "../../../../assets/BannerImg/bg-one.png";
import BannerBgTwo from "../../../../assets/BannerImg/bg-two.png";
import BannerBgThree from "../../../../assets/BannerImg/bg-three.png";
import { Link } from 'react-router-dom';
import { IoLeafSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";

const Banner = () => {
    return (
        <div className="container mx-auto mt-16">


            <div className='grid grid-cols-12'>

                {/* banner text section start */}
                <div className='col-span-5'>

                    <h2 className='text-7xl font-black mt-16 ms-10'>
                        Fun and Easy
                        <br />
                        To become
                        <br />
                        <span className='text-yellow-400'>Master Cook</span>
                    </h2>
                    <p className='ms-10 mt-8 font-semibold text-gray-500'>
                        lets's join us to become expert in every kind of cuisine with a fun way to learn...
                        <br />
                        Providing various easy-to-follow recipes from all over the world & five-star
                        <br />
                        chefs to make at home also learn how to make
                        your cooking
                        <br />
                        tester & easier with us!
                    </p>

                    <div className='ms-12 mt-8'>
                        <h2 className='text-xl font-black text-gray-700 mb-3'>
                            What to cook today?
                        </h2>
                        <div className='flex items-center'>
                            <input
                                className="text-sm bg-gray-200 rounded-md focus:border focus:ring-0 focus:border-gray-300 px-4 w-96 py-3"
                                placeholder="Search Chef's"
                                name="search"
                                type="text" />
                            <p
                                className="font-black bg-black text-white py-3 rounded-md px-8 ms-2 w-fit">
                                Search
                            </p>
                        </div>
                    </div>
                </div>
                {/* banner text section end */}


                {/* banner swiper section start */}
                <div className='col-span-12 lg:col-span-7 lg:mt-10 lg:mr-2'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">

                        <SwiperSlide>
                            <img
                                className='w-full rounded-xl'
                                src="https://img.freepik.com/free-photo/fresh-tomato-vegetable-salad-with-grilled-meat-generative-ai_188544-8308.jpg?w=1380&t=st=1699161416~exp=1699162016~hmac=3ccb0c64441c663908cee574c07c13122eb6b6e70c9020a079647d17bcb54150"
                                alt="" />

                            <div
                                className='lg:absolute w-fit rounded-2xl bottom-40  left-16 text-black bg-white bg-opacity-70  backdrop-blur px-6 py-5'>


                                <h2 className='text-lg font-black'>
                                    Vegetable Carry
                                </h2>

                                <div
                                    className='text-xs font-semibold text-gray-900 mt-3'>

                                    <p className='flex items-center'>
                                        Difficulty: <FaStar className='ms-2 text-gray-600' />  <FaStar className='text-gray-600' />
                                    </p>

                                    <p className='mt-1'>
                                        Meal Type: <span className='font-medium'>Dinner</span>
                                    </p>

                                </div>

                                <div className='pt-5 pb-1 ps-16 text-xs font-medium'>

                                    <p className='flex items-center'>
                                        <BiSolidTimeFive className='text-lg text-gray-600 mr-1' />
                                        30 mins.
                                    </p>

                                    <p className='flex items-center mt-1'>
                                        <BsFillSuitHeartFill className='text-lg text-gray-600 mr-1' />
                                        61.7k+
                                    </p>

                                    <IoLeafSharp className='mt-3 ms-4 bg-yellow-400 text-white text-5xl p-2 rounded-xl' />

                                </div>
                            </div>

                            <div className='w-28 relative bottom-36 left-7'>
                                <img
                                    src={BannerBgOne}
                                    alt="" />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <img
                                className='w-full rounded-xl'
                                src="https://img.freepik.com/free-photo/fresh-seafood-rustic-wooden-plate-generative-ai_188544-8434.jpg?w=1380&t=st=1699161422~exp=1699162022~hmac=db6476bb04d4131288ab620dc3eadb7ddbe0ca4df46d82b347004a050c7bb151"
                                alt="" />

                            <div
                                className='lg:absolute w-fit rounded-2xl bottom-40  left-16 text-black bg-white bg-opacity-70  backdrop-blur px-6 py-5'>


                                <h2 className='text-lg font-black'>
                                    Chicken Carry
                                </h2>

                                <div
                                    className='text-xs font-semibold text-gray-900 mt-3'>

                                    <p className='flex items-center'>
                                        Difficulty: <FaStar className='ms-2 text-gray-600' />  <FaStar className='text-gray-600' />
                                    </p>

                                    <p className='mt-1'>
                                        Meal Type: <span className='font-medium'>Dinner</span>
                                    </p>

                                </div>

                                <div className='pt-5 pb-1 ps-16 text-xs font-medium'>

                                    <p className='flex items-center'>
                                        <BiSolidTimeFive className='text-lg text-gray-600 mr-1' />
                                        30 mins.
                                    </p>

                                    <p className='flex items-center mt-1'>
                                        <BsFillSuitHeartFill className='text-lg text-gray-600 mr-1' />
                                        61.7k+
                                    </p>

                                    <LuVegan className='mt-3 ms-4 bg-green-500 text-white text-5xl p-2 rounded-xl' />

                                </div>
                            </div>

                            <div className='w-28 relative bottom-36 left-7'>
                                <img
                                    src={BannerBgTwo}
                                    alt="" />
                            </div>
                        </SwiperSlide>



                        <SwiperSlide>
                            <img
                                className='w-full rounded-xl'
                                src="https://img.freepik.com/free-photo/close-up-gourmet-meal-with-fresh-organic-vegetables-generative-ai_188544-8300.jpg?w=1380&t=st=1699161415~exp=1699162015~hmac=f522b650a2bcedd64c43168d0454e487754687795b565ef3de4effbf43045ad2"
                                alt="" />

                            <div
                                className='lg:absolute w-fit rounded-2xl bottom-40  left-16 text-black bg-white bg-opacity-70  backdrop-blur px-6 py-5'>


                                <h2 className='text-lg font-black'>
                                    Meet Carry
                                </h2>

                                <div
                                    className='text-xs font-semibold text-gray-900 mt-3'>

                                    <p className='flex items-center'>
                                        Difficulty: <FaStar className='ms-2 text-gray-600' />  <FaStar className='text-gray-600' />
                                    </p>

                                    <p className='mt-1'>
                                        Meal Type: <span className='font-medium'>Dinner</span>
                                    </p>

                                </div>

                                <div className='pt-5 pb-1 ps-16 text-xs font-medium'>

                                    <p className='flex items-center'>
                                        <BiSolidTimeFive className='text-lg text-gray-600 mr-1' />
                                        30 mins.
                                    </p>

                                    <p className='flex items-center mt-1'>
                                        <BsFillSuitHeartFill className='text-lg text-gray-600 mr-1' />
                                        61.7k+
                                    </p>

                                    <GiFruitBowl className='mt-3 ms-4 bg-red-600 text-white text-5xl p-2 rounded-xl' />

                                </div>
                            </div>

                            <div className='w-28 relative bottom-36 left-7'>
                                <img
                                    src={BannerBgThree}
                                    alt="" />
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                        <img
                            className='w-full rounded-xl'
                            src="https://img.freepik.com/free-photo/fresh-seafood-rustic-wooden-plate-generative-ai_188544-8434.jpg?w=1380&t=st=1699161422~exp=1699162022~hmac=db6476bb04d4131288ab620dc3eadb7ddbe0ca4df46d82b347004a050c7bb151"
                            alt="" />
                        <div className='relative bottom-24 text-7xl text-white'>
                            this is ht
                        </div>
                    </SwiperSlide> */}

                        {/* <SwiperSlide>
                        <img
                            className='w-full rounded-xl'
                            src="https://img.freepik.com/free-photo/close-up-gourmet-meal-with-fresh-organic-vegetables-generative-ai_188544-8300.jpg?w=1380&t=st=1699161415~exp=1699162015~hmac=f522b650a2bcedd64c43168d0454e487754687795b565ef3de4effbf43045ad2"
                            alt="" />
                        <div className='relative bottom-24 text-7xl text-white'>
                            this is ht
                        </div>
                    </SwiperSlide> */}



                    </Swiper>
                </div>
                {/* banner swiper section end */}

            </div>



        </div>
    );
};

export default Banner;