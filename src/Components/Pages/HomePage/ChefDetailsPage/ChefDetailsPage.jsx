import { useLoaderData } from "react-router-dom";

const ChefDetailsPage = () => {
    const loader = useLoaderData();
    const { chefImg, name, experience, recipe, likes, bio, img } = loader;

    return (
        <div>

        </div>
    );
};

export default ChefDetailsPage;