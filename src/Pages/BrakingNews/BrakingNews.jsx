import Marquee from "react-fast-marquee";
const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BrakingNews;