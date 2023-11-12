import SingleRecommended from "./SingleRecommended";
import { useLoaderData } from "react-router-dom";

const Recommended = () => {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://chef-zone-server-dvi1v6tnx-shakilahmedshuvo.vercel.app/chefCollection')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //     // console.log(data);
    // }, [])

    // json fetch
    const loader = useLoaderData();

    return (
        <>
            <>
                <h2
                    className='text-3xl lg:text-5xl font-black ps-3 lg:ps-0 lg:mt-28 mt-8'>
                    Recommended for you
                </h2>
            </>

            {/* map section start */}
            <div
                className='grid lg:grid-cols-3 lg:mb-24 mb-6'>
                {
                    loader?.slice(0, 3).map(data => <SingleRecommended
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