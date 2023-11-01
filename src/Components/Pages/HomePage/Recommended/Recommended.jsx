import { useEffect, useState } from "react";
import SingleRecommended from "./SingleRecommended";

const Recommended = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefCollection')
            .then(res => res.json())
            .then(data => setData(data))
        // console.log(data);
    }, [])

    return (
        <>
            <>
                <h2
                    className='text-3xl lg:text-5xl font-black ps-3 lg:ps-0 mt-28'>
                    Recommended for you
                </h2>
            </>

            {/* map section start */}
            <div
                className='grid lg:grid-cols-3 mb-24'>
                {
                    data.slice(0, 3).map(data => <SingleRecommended
                        key={data.id}
                        data={data}
                    ></SingleRecommended>)
                }
            </div>
            {/* map section end */}
        </>
    );
};

export default Recommended;