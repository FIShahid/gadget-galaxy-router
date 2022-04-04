import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import kindle from '../../Assets/kindle.jpg'

const Home = () => {
    const [reviews] = useReviews()

    return (
        <div>

            <div className='flex flex-row py-8  mx-auto items-center justify-between container'>
                <div className=''>
                    <h1 className='text-5xl'>Lose yourself in a book—
                        wherever, whenever</h1>
                    <p>Kindle Paperwhite is thin, lightweight, and travels easily so you can enjoy your favorite books at any time. With our signature 300 ppi glare-free Paperwhite display—now 10% brighter at its max setting—you can read in any light. And now, a single battery charge via USB-C lasts up to 10 weeks. Battery life may vary depending on use.

                    </p>
                    <button className='m-5 p-5 bg-green-500'>Live Demo</button>
                </div>
                <div>
                    <img src={kindle} alt="" />
                </div>

            </div>

            <h4 className='text-4xl mt-5 mb-14'>Customer Review (3) </h4>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {


                    reviews.slice(0, 3).map(review =>

                        <div className=' container max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-12 mb-10'>
                            <div className='flex flex-col items-center pb-10'>
                                <img className='mb-3 w-24 h-34 rounded-full shadow-lg ' src={review.image} alt="" />

                                <h3 className='font-bold text-orange-400 mt-4 mb-4'> Name: {review.name}</h3>
                                <p className='text-white font-mono p-4'>{review.review}</p>
                                <p className='font-bold text-orange-500 '>Ratings: {review.ratings}</p>

                            </div>

                        </div>)
                }
            </div>
            <Link to='/reviews' element={<Reviews></Reviews>}>
                <button className='m-2 p-3 bg-green-600 w-[500px] rounded-xl text-white font-mono font-bold'>See more Reviews</button>
            </Link>
        </div>


    );
};

export default Home;