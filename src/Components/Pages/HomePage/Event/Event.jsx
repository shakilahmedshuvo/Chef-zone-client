import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../Shared/SectionTitle";
import { IoIosArrowForward } from "react-icons/io";


const Event = () => {
    return (
        <div className="max-w-7xl mx-auto mt-24 mb-10 p-3">
            <SectionTitle
                heading={"Upcoming Events"}
            ></SectionTitle>
            <p
                className='text-lg mt-5 text-yellow-400 font-black text-center'>
                {
                    moment().format("dddd, MMMM D, YYYY")
                }
            </p>

            {/* live date */}
            {/* Marquee start */}
            <Marquee
                className='font-semibold text-base mt-4 mb-8 text-gray-600'>
                Taste the Old and New Napa Valley and
                Weekend with Healthy & Excellent Breakfasts and
                Taste the Linguini Vineyards Cabernet Avignon
            </Marquee>
            {/* Marquee end */}
            {/* Upcoming events start */}

            <div className="grid lg:grid-cols-12 mt-10">

                <div className='col-span-12 lg:col-span-8 mt-5'>
                    <h3 className='text-yellow-400 font-black text-2xl'>
                        06/08/2024 — 12/08/2024
                    </h3>
                    <h2 className='text-3xl lg:text-4xl font-bold mt-4'>
                        Taste the Old and Chicken Biryani
                    </h2>
                    <p className='lg:mt-6 font-bold text-gray-500 my-4 text-sm'>
                        If the chicken in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping
                        <br />
                        fine, and the size of recipes for at my best; and well cooked, taking on the sauce and let it thickens;
                        <br />
                        add…
                    </p>

                    <p className='lg:mt-6 font-bold text-gray-500 my-4 text-sm'>
                        dare dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                        <br />
                        make a type specimen book. It has survived not only five centuries, but also the leap
                        <br />
                        into electronic typesetting.
                    </p>

                </div>

                <div className="col-span-12 lg:col-span-4 p-2 border-2 border-yellow-300 mt-5">
                    <img
                        className='w-100 rounded-md'
                        src="https://img.freepik.com/free-psd/asian-delicious-food-social-media-template_505751-2967.jpg?w=740&t=st=1683034579~exp=1683035179~hmac=303cf97633ebb29ee7efb876a3176c5b09f059652f1b1960af6da031c65f3913"
                        alt="" />
                </div>

            </div>

            <div className='grid lg:grid-cols-12 mt-10'>

                <div className="col-span-12 lg:col-span-4 p-2 border-2 border-yellow-300 mt-5">
                    <img
                        className='w-100 rounded-md'
                        src="https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3001.jpg?w=740&t=st=1683034680~exp=1683035280~hmac=426f6798549456db26e7c032e30cce9b6bb301bd0b3c229dd127f612d8d2b12c"
                        alt="" />
                </div>

                <div className='col-span-12 lg:col-span-8 mt-8 lg:ms-10'>
                    <h3 className='text-yellow-400 font-black text-2xl'>
                        06/08/2024 — 12/08/2024
                    </h3>
                    <h2 className='text-3xl lg:text-4xl font-bold mt-4'>
                        Taste the Old and Chicken Biryani
                    </h2>
                    <p className='lg:mt-6 font-bold text-gray-500 my-2 text-sm'>
                        If the chicken in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping
                        <br />
                        fine, and the size of recipes for at my best; and well cooked, taking on the sauce and let it thickens;
                        <br />
                        add…
                    </p>

                    <p className='lg:mt-6 font-bold text-gray-500 my-4 text-sm'>
                        dare dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                        <br />
                        make a type specimen book. It has survived not only five centuries, but also the leap
                        <br />
                        into electronic typesetting.
                    </p>

                </div>

            </div>
            {/* Upcoming events end */}
        </div>
    );
};

export default Event;