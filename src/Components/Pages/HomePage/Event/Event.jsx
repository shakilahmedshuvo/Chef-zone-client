import moment from "moment/moment";
import Marquee from "react-fast-marquee";

const Event = () => {
    return (
        <div className="max-w-7xl mx-auto mt-5 p-3">
            <hr />
            {/* Upcoming Events section*/}
            <h2
                className='text-center fs-1 fw-bolder text-secondary pt-4'>
                Upcoming Events
                <p
                    className='fs-6 mt-3 text-warning'>
                    {
                        moment().format("dddd, MMMM D, YYYY")
                    }
                </p>
            </h2>
            {/* live date */}
            {/* Marquee start */}
            <Marquee
                className='fw-bold fs-6 mt-4 mb-5'>
                Taste the Old and New Napa Valley and
                Weekend with Healthy & Excellent Breakfasts and
                Taste the Linguini Vineyards Cabernet Avignon
            </Marquee>
            {/* Marquee end */}
            {/* Upcoming events start */}

            <div className="grid grid-cols-12">

                <div className='col-span-8 mt-5'>
                    <h3 className='text-warning fw-bold'>
                        06/08/2024 — 12/08/024
                    </h3>
                    <h2 className='fw-bolder'>
                        Taste the Old and Chicken Biryani
                    </h2>
                    <p className='mt-4 fw-bold text-secondary'>
                        If the chicken in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping
                        <br />
                        fine, and the size of recipes for at my best; and well cooked, taking on the sauce and let it thickens;
                        <br />
                        add…
                    </p>
                    <button
                        type="button"
                        className="btn btn-dark fs-5 fw-bolder mt-3">
                        View More
                    </button>
                </div>

                <div className="col-span-4">
                    <img
                        className='w-100 mt-5 rounded-md'
                        src="https://img.freepik.com/free-psd/asian-delicious-food-social-media-template_505751-2967.jpg?w=740&t=st=1683034579~exp=1683035179~hmac=303cf97633ebb29ee7efb876a3176c5b09f059652f1b1960af6da031c65f3913"
                        alt="" />
                </div>

            </div>

            <div className='grid grid-cols-12 mt-5'>

                <div className="col-span-4">
                    <img
                        className='w-100 mt-5'
                        src="https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3001.jpg?w=740&t=st=1683034680~exp=1683035280~hmac=426f6798549456db26e7c032e30cce9b6bb301bd0b3c229dd127f612d8d2b12c"
                        alt="" />
                </div>


                <div className='col-span-8 mt-5 ms-2'>
                    <h3 className='text-warning fw-bold'>
                        06/08/2024 — 12/08/024
                    </h3>
                    <h2 className='fw-bolder'>
                        Taste the Old and Chicken Biryani
                    </h2>
                    <p className='mt-4 fw-bold text-secondary'>
                        If the chicken in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping
                        <br />
                        fine, and the size of recipes for at my best; and well cooked, taking on the sauce and let it thickens;
                        <br />
                        add…
                    </p>
                    <div className='d-flex justify-content-end'>
                        <button
                            type="button"
                            className="btn btn-dark fs-5 fw-bolder mt-1">
                            View More
                        </button>
                    </div>
                </div>

            </div>
            {/* Upcoming events end */}
        </div>
    );
};

export default Event;