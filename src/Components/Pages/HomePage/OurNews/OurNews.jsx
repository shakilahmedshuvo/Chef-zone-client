import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import SingleNewsCard from "./SingleNewsCard";

const OurNews = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('ourNews.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="max-w-7xl mx-auto">

            <SectionTitle
                heading={"Our News & Blogs"}
                subHeading={"Latest News"}
            ></SectionTitle>

            {/* map section start */}
            <div className="grid lg:grid-cols-3 mt-10">
                {
                    data?.map((data) => (
                        <SingleNewsCard
                            key={data.id}
                            data={data}
                        ></SingleNewsCard>
                    ))
                }
            </div>
            {/* map section end */}

        </div>
    );
};

export default OurNews;