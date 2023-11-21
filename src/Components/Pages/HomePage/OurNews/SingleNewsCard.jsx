import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const SingleNewsCard = ({ data }) => {
    const { img, userImg, date, title, shortDes } = data;
    // console.log(data);

    return (
        <div
            className="mx-3 my-2 group group/item">
            <div className="overflow-hidden">
                <img
                    className="rounded-t-md group-hover:-rotate-6 duration-1000 group-hover:scale-125"
                    src={img}
                    alt="" />
            </div>
            <div className="border-x-2 border-b-2 group-hover:border-yellow-400 duration-500">

                <div className="grid grid-cols-2">
                    <img
                        className="w-[32%] mx-4 relative bottom-10 rounded-full"
                        src={userImg}
                        alt="" />
                    <div className="flex items-center justify-end mr-3 font-bold text-gray-700">
                        Posted {date}
                    </div>
                </div>

                <hr className="border-2 mx-8 relative bottom-1 mb-3" />


                <div className="mx-8 my-8">
                    <h2 className="text-xl font-bold">{title}</h2>

                    <p
                        className="font-medium text-gray-500 mt-4 mb-5">
                        {shortDes}
                    </p>
                </div>
            </div>

            <div
                className="border-b-2 border-x-2 group-hover:border-yellow-400 duration-500 py-3 flex items-center justify-between rounded-b-md px-8 cursor-pointer group-hover:bg-yellow-400">
                <Link
                    className="font-bold text-yellow-400 group-hover:text-white text-sm duration-500">
                    CONTINUE READING
                </Link>
                <BiSolidRightArrow className="text-yellow-400 group-hover:text-white duration-500" />
            </div>

        </div>
    );
};

export default SingleNewsCard;