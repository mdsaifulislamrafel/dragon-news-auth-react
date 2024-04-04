import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BrakingNews from "./BrakingNews/BrakingNews";

const Home = () => {

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
                    <h2>News coming soon</h2>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;