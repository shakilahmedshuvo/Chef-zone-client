import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import ChefSingleCard from "./ChefSingleCard";
// import ChefSingleCard from "./ChefSingleCard";
// import { useQuery } from "@tanstack/react-query";

const Chef = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefCollection")
            .then(res => res.json())
            .then(data => setData(data))
        // .then(data => console.log(data))
    }, []);


    // tan stack
    // const { data } = useQuery({
    //     queryKey: ['chefCollection'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/chefCollection');
    //         console.log(data);
    //         return res.json();
    //     }
    // })


    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle
                heading={"Our Chef Zone Chef's"}
                subHeading={"Our chefs headed by Chef Linguini cook with love with the freshest and highest quality ingredients mostly from our farm"}
            ></SectionTitle>

            {/* card map section start */}
            <div className="grid lg:grid-cols-3">
                {
                    data.map((data) => (
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