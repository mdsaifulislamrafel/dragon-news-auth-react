import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BrakingNews from "./BrakingNews/BrakingNews";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header />
            <BrakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;