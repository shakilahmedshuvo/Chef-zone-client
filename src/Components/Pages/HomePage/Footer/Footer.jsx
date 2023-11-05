import { FaFacebookF, FaTwitter, FaInstagram, FaSnapchatSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white pb-10 lg:pt-5'>
            {/* footer section */}
            <div className='container mx-auto mt-5 lg:p-5'>

                <div className='grid lg:grid-cols-12 px-12 py-8'>

                    <div className='col-span-3 text-gray-500 text-end font-black text-sm'>
                        Chef Taylor Bondsman, working in
                        <br />
                        collaboration with Head Chef Marguerite
                        <br />
                        Keogh, offer elegant & playful modern
                        <br />
                        British cooking. . .
                    </div>

                    <div className='text-end col-span-3 font-black text-lg'>
                        <small>
                            <small
                                className='my-5'>
                                HOME
                            </small>
                            <br />
                            <small
                                className='my-5'>
                                MENU
                            </small>
                            <br />
                            <small
                                className='my-5'>
                                RESERVATION
                            </small>
                            <br />
                            <small
                                className='my-5'>
                                SHOP
                            </small>
                            <br />
                            <small
                                className='my-5'>
                                NEWS
                            </small>
                            <br />
                            <small
                                className='my-5'>
                                CONTACT
                            </small>
                        </small>
                    </div>

                    <div className='text-end col-span-3'>
                        <p
                            className='text-yellow-400 font-black'>
                            ONLINE RESERVATION
                        </p>
                        <p
                            className='text-gray-500 font-black mt-3'>
                            FOLLOW
                        </p>
                        {/* footer icons start */}
                        <div
                            className='flex justify-between text-end ms-32 mt-6'>
                            <div className="flex justify-end">
                                <FaFacebookF className="text-lg" />
                            </div>
                            <div className="flex justify-end">
                                <FaTwitter className="text-lg" />
                            </div>
                            <div className="flex justify-end">
                                <FaInstagram className="text-lg" />
                            </div>
                            <div className="flex justify-end">
                                <FaSnapchatSquare className="text-lg" />
                            </div>
                        </div>
                        {/* footer icons end */}
                    </div>

                    <div className='text-end col-span-3 text-gray-500 font-black text-xs'>
                        <span
                            className='text-yellow-400 text-base'>
                            + 1 2345 6789 1234
                        </span>
                        <p className="mt-3">
                            CHEFJONE@GMAIL.COM
                        </p>
                        <p className="mt-2">
                            49 GULSHAN Street
                        </p>
                        <p className="mt-2">
                            DHAKA
                        </p>
                        <p className="mt-2">
                            EC1Y 8SY
                        </p>
                        <p className="mt-2">
                            BANGLADESH
                        </p>
                    </div>
                </div>

                <small
                    className='text-center font-black text-sm mt-5 ms-4'>
                    @ ALL RIGHTS RESERVED BY <span className='text-yellow-400'>
                        CAFE JONE SAS</span>
                </small>

            </div>
        </div>
    );
};

export default Footer;