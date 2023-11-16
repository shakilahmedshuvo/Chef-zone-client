import SectionTitle from "../../Shared/SectionTitle";
import { GiCookingPot } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const Facilities = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <>
                <SectionTitle
                    heading={"Our Facilities"}
                    subHeading={"Quality is at heart of everything We Do"}
                ></SectionTitle>
            </>


            {/* card section start */}
            <div className="grid lg:grid-cols-2">


                {/* first card section start */}
                <div className="group group/item">
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-2 lg:px-8 my-3 lg:my-4'>
                        <div className="flex items-center mt-6">
                            <GiCookingPot
                                className='text-5xl bg-yellow-400 text-white p-1 rounded-md' />
                            <h2
                                className='text-3xl font-extrabold text-gray-600 ms-4'>
                                Facilities Provided
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold lg:text-base text-sm'>
                            My recipe section is another popular feature, offering the chefs signature recipes along with cooking tips and techniques. This provides value to customers and establishes the chef as an authority in their field. Customers can learn from the chef and even try their recipes at home.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg group-hover:bg-black group-hover:text-white duration-500 cursor-pointer text-xs'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </div>
                {/* first card section end */}


                {/* second card section start */}
                <div className="group group/item">
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-2 lg:px-8 my-3 lg:my-4'>
                        <div className="flex items-center mt-6">
                            <BiBuildingHouse
                                className='text-5xl bg-yellow-400 text-white p-1 rounded-md' />
                            <h2
                                className='text-3xl font-extrabold text-gray-600 ms-4'>
                                Facilities Provided
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold lg:text-base text-sm'>
                            The accommodation section of a chef website provides a menu display, recipe section, online reservation system, blog section, and social media integration. These facilities showcase the chefs culinary skills, enhance the customer experience.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg group-hover:bg-black group-hover:text-white duration-500 cursor-pointer text-xs'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </div>
                {/* second card section end */}


                {/* third card section start */}
                <div className="group group/item">
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-2 lg:px-8'>
                        <div className="flex items-center mt-6">
                            <BsPeople
                                className='text-5xl bg-yellow-400 text-white p-1 rounded-md' />
                            <h2
                                className='text-3xl font-extrabold text-gray-600 ms-4'>
                                Real Work Practice
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold lg:text-base text-sm'>
                            The Real Work Practice section of a chef website provides insight into the daily routine of the chef,highlighting their expertise and professionalism.A look into how the chef sources ingredients and prepares dishes,giving customers a behind scenes look into the chefs culinary process.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg group-hover:bg-black group-hover:text-white duration-500 cursor-pointer text-xs'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </div>
                {/* third card section end */}


                {/* fourth card section start */}
                <div className="group group/item">
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-2 lg:px-8'>
                        <div className="flex items-center mt-6">
                            <FaGraduationCap
                                className='text-5xl bg-yellow-400 text-white p-1 rounded-md' />
                            <h2
                                className='text-3xl font-extrabold text-gray-600 ms-4'>
                                Graduation Certificate
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold lg:text-base text-sm'>
                            The Graduation Certificate section of a chef website can showcase the chefs educational background and culinary certifications. This section can include information about the culinary school the chef attended, including the name of the school, location, and program completed.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg group-hover:bg-black group-hover:text-white duration-500 cursor-pointer text-xs'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </div>
                {/* fourth card section end */}


            </div>
            {/* card section end */}
            <div className='text-center my-10'>
                <button
                    className='bg-gray-900 font-black px-5 py-3 text-white rounded-lg hover:bg-white hover:text-black border-2 hover:border-gray-300 duration-300'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Facilities;