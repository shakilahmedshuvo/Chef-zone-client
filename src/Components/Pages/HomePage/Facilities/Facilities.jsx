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
                <p className="text-center font-semibold text-gray-500 mt-4">
                    Our daily changing menu represents the best of what our local markets have to
                    <br />
                    offer. Our passion for sourcing fresh ingredients from farmers and suppliers we
                    <br />
                    know, combining with traditional flavors and rewriting familiar recipes into
                    <br />
                    exceptional cuisine is our mission and greatest joy.
                </p>
            </>


            {/* card section start */}
            <div className="grid lg:grid-cols-2 mt-5">


                {/* first card section start */}
                <>
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-3 px-8 my-6'>
                        <div className="flex items-center mt-6">
                            <GiCookingPot
                                className='text-5xl bg-yellow-400 text-white p-1' />
                            <h2
                                className='text-3xl font-extrabold text-yellow-400 ms-5'>
                                Facilities Provided
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold'>
                            My recipe section is another popular feature, offering the chefs signature recipes along with cooking tips and techniques. This provides value to customers and establishes the chef as an authority in their field. Customers can learn from the chef and even try their recipes at home.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </>
                {/* first card section end */}


                {/* scend card section start */}
                <>
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-3 px-8 my-6'>
                        <div className="flex items-center mt-6">
                            <BiBuildingHouse
                                className='text-5xl bg-yellow-400 text-white p-1' />
                            <h2
                                className='text-3xl font-extrabold text-yellow-400 ms-5'>
                                Facilities Provided
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold'>
                            The accommodation section of a chef website provides a menu display, recipe section, online reservation system, blog section, and social media integration. These facilities showcase the chefs culinary skills, enhance the customer experience.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </>
                {/* first card section end */}


                {/* first card section start */}
                <>
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-3 px-8'>
                        <div className="flex items-center mt-6">
                            <BsPeople
                                className='text-5xl bg-yellow-400 text-white p-1' />
                            <h2
                                className='text-3xl font-extrabold text-yellow-400 ms-5'>
                                Real Work Practice
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold'>
                            The Real Work Practice section of a chef website provides insight into the daily routine of the chef,highlighting their expertise and professionalism.A look into how the chef sources ingredients and prepares dishes,giving customers a behind scenes look into the chefs culinary process.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </>
                {/* first card section end */}


                {/* first card section start */}
                <>
                    <div className='p-3 border-gray-200 border-2 rounded-lg mx-3 px-8'>
                        <div className="flex items-center mt-6">
                            <FaGraduationCap
                                className='text-5xl bg-yellow-400 text-white p-1' />
                            <h2
                                className='text-3xl font-extrabold text-yellow-400 ms-5'>
                                Graduation Certificate
                            </h2>
                        </div>
                        <p
                            className='mt-5 text-gray-500 font-bold'>
                            The Graduation Certificate section of a chef website can showcase the chefs educational background and culinary certifications. This section can include information about the culinary school the chef attended, including the name of the school, location, and program completed.
                        </p>
                        <div className="flex justify-end mb-2 mt-3">
                            <p
                                className='border-2 border-gray-300 w-fit font-black px-4 py-2 rounded-lg'>
                                VIEW
                            </p>
                        </div>
                    </div>
                </>
                {/* first card section end */}


            </div>
            {/* card section end */}
            <div className='text-center my-10'>
                <button
                    className='bg-gray-900 font-black px-5 py-3 text-white rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-gray-300'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Facilities;