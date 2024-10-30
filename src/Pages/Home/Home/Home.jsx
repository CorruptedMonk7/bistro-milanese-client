import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenus from "../PopularMenus/PopularMenus";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Milanese | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenus></PopularMenus>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;