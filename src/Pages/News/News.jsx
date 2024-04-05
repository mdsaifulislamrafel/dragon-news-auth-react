import Header from '../../Shared/Header';
import Navbar from '../../Shared/Navbar';
import RightSideNav from '../../Shared/RightSideNav';
import { useParams } from 'react-router-dom';
const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className="text-5xl">News Details</h2>
                    {id}
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
            <h2>This is a news</h2>
        </div>
    );
};

export default News;