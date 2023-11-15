import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Testimonials.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="mt-20 max-w-7xl mx-auto pb-24">

            <>
                <SectionTitle
                    heading={"Testimonials"}
                    subHeading={"WHAT CLIENT SAY!"}
                ></SectionTitle>
            </>

            <div>

                <p className="text-center mt-2 text-gray-500 font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's stan
                </p>

                {/* slider section start */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
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
                    {/* map section start */}
                    {
                        data?.map((data) => (

                            <SwiperSlide
                                key={data.id}>

                                <div className="group group/item mt-10 bg-gray-50 lg:px-12 mx-3 rounded-md">
                                    <div className="flex items-center justify-center mb-5 pt-6">
                                        <FaQuoteLeft className="text-4xl text- hover:text-yellow-300 text-gray-400 duration-500" />
                                    </div>

                                    <div>
                                        <p className="font-medium text-gray-700 text-center lg:text-base text-sm">
                                            {data?.review}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center">
                                            <div className="w-20 h-20 mt-5">
                                                <img
                                                    className="rounded-full   hover:border-4 group-hover:border-yellow-500 border-4 border-gray-300 duration-300"
                                                    src={data?.img}
                                                    alt="" />
                                            </div>
                                            <div className="ms-4 mt-5">
                                                <h2 className="text-xl font-black">{data?.name}</h2>
                                                <p className="text-center font-semibold text-gray-500 text-sm">Customer</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </SwiperSlide>
                        ))
                    }
                    {/* map section end */}
                </Swiper>
                {/* slider section end */}
            </div>
        </div>
    );
};

export default Testimonials;