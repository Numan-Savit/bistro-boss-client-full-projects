
import AddToCard from "./AddToCard";
import Banner from "./Banner";
import BistroTitle from "./BistroTitle";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testomonial from "./Testomonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroTitle></BistroTitle>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <AddToCard></AddToCard>
            <Featured></Featured>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;