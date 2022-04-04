import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
;

const Reviews = () => {
    const [reviews]= useReviews()
   
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2 '>
            <p className='text-center text-3xl font-bold pb-10'>What our Customer Says...</p>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
           {
                reviews.map(review=><ReviewDetails
                key={review.id}
                review={review}
                
                
                ></ReviewDetails>)
            }
           </div>
           
        </div>
    );
};

export default Reviews;