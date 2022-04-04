import React from 'react';

const ReviewDetails = ({review}) => {
    return (
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-600 dark:border-gray-700 mb-10'>
           <div className='flex flex-col items-center pb-10'>
                <img className='mb-3 w-24 h-34 rounded-full shadow-lg ' src={review.image} alt="" />
           
           <h3 className='font-bold text-orange-400 mt-4 mb-4'> Name: {review.name}</h3>
           <p className='text-white font-mono p-4'>{review.review}</p>
           <p className='font-bold text-orange-500 '>Ratings: {review.ratings}</p>

           </div>
            
        </div>
    );
};

export default ReviewDetails;