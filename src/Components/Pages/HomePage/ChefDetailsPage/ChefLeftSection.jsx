import RecipeCard from "./RecipeCard";

const ChefLeftSection = ({ data }) => {
    const { name} = data;

    return (
        <div className="lg:mx-8">
            <>
                <h2 className="text-3xl text-gray-500 font-semibold text-center">
                    {name} Recipe's
                </h2>

                <p className="text-base mt-4 font-semibold text-gray-500 px-4">
                    We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better. Donec quam felis, ultricies nec, pellentesque eu.
                </p>

                <hr className="my-6 border-t-2" />
            </>

            {/* recipe card section */}
            <RecipeCard
                key={data._id}
                data={data}
            ></RecipeCard>

        </div>
    );
};

export default ChefLeftSection;