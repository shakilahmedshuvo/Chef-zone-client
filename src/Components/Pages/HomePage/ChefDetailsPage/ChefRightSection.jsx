const ChefRightSection = ({ data }) => {
    const { chefImg, name, experience, recipe, likes, bio, img } = data;

    return (
        <div>
            <h2 className="text-3xl text-gray-500 font-semibold text-center">
                Chef Details:
            </h2>

            <hr className="my-6 border-t-2" />

            <img
                className="rounded-lg"
                src={chefImg}
                alt="" />
        </div>
    );
};

export default ChefRightSection;