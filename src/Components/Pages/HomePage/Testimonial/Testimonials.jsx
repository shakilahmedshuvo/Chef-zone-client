import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Testimonials.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="mt-20 max-w-7xl mx-auto">

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
                    slidesPerView={3}
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
                                {data.id}
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