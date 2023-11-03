// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 mt-16">

            {/* banner text section start */}
            <div className='col-span-5'>

            </div>
            {/* banner text section end */}



            {/* banner swiper section start */}
            <div className='col-span-12 lg:col-span-7'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">

                    <SwiperSlide>
                        <img
                            // className='w-[90%]'
                            src="https://img.freepik.com/free-vector/college-campus-concept-illustration_114360-10508.jpg?w=1060&t=st=1690030254~exp=1690030854~hmac=6b24c407a99611019428ea8feb229d556b8da9790e7842ada25d441f2637671f"
                            alt="" />
                        <p className='relative bottom-24 text-7xl'>
                            this is ht
                        </p>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/free-vector/college-campus-concept-illustration_114360-10508.jpg?w=1060&t=st=1690030254~exp=1690030854~hmac=6b24c407a99611019428ea8feb229d556b8da9790e7842ada25d441f2637671f"
                            alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/free-vector/college-campus-concept-illustration_114360-10508.jpg?w=1060&t=st=1690030254~exp=1690030854~hmac=6b24c407a99611019428ea8feb229d556b8da9790e7842ada25d441f2637671f"
                            alt="" />
                    </SwiperSlide> */}

                </Swiper>
            </div>
            {/* banner swiper section end */}


        </div>
    );
};

export default Banner;