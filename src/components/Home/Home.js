import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import kindle from '../../Assets/kindle.jpg'
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    const [reviews] = useReviews()

    return (
        <div>

            <div className='container grid sm:grid-cols-1 md:grid-cols-2  items-center justify-items-center m-6 p-2'>
                <div className=''>
                    <h1 className='text-5xl'><span className='text-5xl font-bold text-green-500'>Lose yourself in a book—</span>
                        <span className='text-5xl font-bold text-purple-500'>wherever, whenever</span></h1>
                    <p className='mt-8 font-semibold '>Kindle Paperwhite is thin, lightweight, and travels easily so you can enjoy your favorite books at any time. With our signature 300 ppi glare-free Paperwhite display—now 10% brighter at its max setting—you can read in any light. And now, a single battery charge via USB-C lasts up to 10 weeks. Battery life may vary depending on use.

                    </p>
                    <button className='m-5 p-4 bg-green-500 rounded-xl text-white font-bold w-[200px]'>Live Demo</button>
                </div>
                <div className=''>
                    <img src={kindle} alt="" />
                </div>

            </div>

            <h4 className='text-4xl mt-5 mb-14 font-bold text-purple-600'>Customer Review (3) </h4>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {


                    reviews.slice(0, 3).map(review =><HomeCard
                    key={review.id}
                    review={review}
                    
                    ></HomeCard>

                       )
                }
            </div>
            <Link to='/reviews' element={<Reviews></Reviews>}>
                <button className='m-2 p-3 bg-green-600 w-[500px] rounded-xl text-white font-mono font-bold'>See more Reviews</button>
            </Link>
        </div>


    );
};

export default Home;