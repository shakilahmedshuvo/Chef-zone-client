import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle";
import ChefSingleCard from "./ChefSingleCard";

const Chef = () => {
    // tan stack for data fetch
    const { data, isLoading, isError } = useQuery({
        queryKey: ["chefCollection"],
        queryFn: async () => {
            const res = await fetch("https://chef-zone-server-production.up.railway.app/chefCollection")
            return res.json();
        }
    })
    if (isLoading) {
        return <p className="text-center text-yellow-400 text-4xl my-10">
            Loading . . .
        </p>
    }
    if (isError) {
        return <p className="text-center text-yellow-400 text-4xl my-10">
            Something went wrong. . .
        </p>
    }

    return (
        <div className="max-w-7xl mx-auto mb-16">
            <SectionTitle
                heading={"Our Chef Zone Chef's"}
                subHeading={"Our chefs headed by Chef Linguini cook with love with the freshest and highest quality ingredients mostly from our farm"}
            ></SectionTitle>

            {/* card map section start */}
            <div className="grid lg:grid-cols-3 mt-8">
                {
                    data?.map((data) => (
                        <ChefSingleCard
                            key={data.id}
                            data={data}
                        ></ChefSingleCard>
                    ))
                }
            </div>
            {/* card map section end */}
        </div>
    );
};

export default Chef;