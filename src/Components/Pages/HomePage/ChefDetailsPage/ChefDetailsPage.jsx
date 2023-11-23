import ChefRightSection from "./ChefRightSection";
import ChefLeftSection from "./ChefLeftSection";
import Recommended from "../Recommended/Recommended";
import { useLoaderData } from "react-router-dom";

const ChefDetailsPage = () => {
    const data = useLoaderData();
    const { chefImg, name, experience, recipe, likes, bio, img } = data;
    // console.log(data);

    return (
        <div className="max-w-7xl mx-auto lg:pt-12">

            {/* page header section start */}
            <>
                <div className="flex justify-center lg:justify-end items-center lg:pt-10 pt-16">
                    <p className='text-white bg-yellow-400 w-fit font-black rounded-full px-6 py-2 text-xs'>
                        Recommended
                    </p>
                </div>

                <h1 className='text-xl lg:text-3xl text-center text-gray-500 font-extrabold lg:my-0 my-4'>
                    {name} Info & Recipes Details
                </h1>
            </>

            <div className="grid lg:grid-cols-12 lg:mt-7 mb-4">

                <div className="col-span-4 flex items-center justify-center">
                    <div className="border-t-2 lg:my-0 my-4 lg:mt-4 w-[90%]">
                        <hr />
                    </div>
                </div>

                <div className="col-span-4 flex items-center justify-center">
                    <p className="bg-gray-300 text-gray-600 font-bold w-fit rounded-full px-16 py-3 text-sm">
                        Chef Recipe Details
                    </p>
                </div>

                <div className="col-span-4 flex items-center justify-center">
                    <div className="border-t-2 mt-4 w-[90%]">
                        <hr />
                    </div>
                </div>

            </div>
            {/* page header section end */}

            {/* main details section start */}
            <div className="grid lg:grid-cols-12 mt-8 lg:mt-16">


                {/* right side div start */}
                <div className="col-span-12 lg:col-span-4">
                    <ChefRightSection
                        data={data}
                    ></ChefRightSection>
                </div>
                {/* right side div end */}


                {/* left side div start */}
                <div className="col-span-12 lg:col-span-8">
                    <ChefLeftSection
                        data={data}
                    ></ChefLeftSection>
                </div>
                {/* left side div end */}

            </div>
            {/* main details section end */}


            {/* Recommended section start */}

            <Recommended />

            {/* Recommended section end */}



        </div>
    );
};

export default ChefDetailsPage;