import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import DishOfTheWeek from "../DishOfTheWeek/DishOfTheWeek";
import Event from "../Event/Event";
import Facilities from "../Facilities/Facilities";
import OurNews from "../OurNews/OurNews";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
    return (
        <>
            <Banner />
            <Facilities />
            <Chef />
            <OurNews />
            <Event />
            <DishOfTheWeek />
            <Testimonials />
        </>
    );
};

export default Home;