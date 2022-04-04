import React from 'react';

const ReviewDetails = ({review}) => {
    return (
        <div className='max-w-sm bg-white rounded-lg border bg-slate-100 border-gray-200 shadow-md  mb-10'>
           <div className='flex flex-col items-center pb-10'>
                <img className=' w-[100px] h-[100px] rounded-full shadow-lg mt-6 ' src={review.image} alt="" />
           
           <h3 className='font-bold text-orange-400 mt-4 mb-4'> Name: {review.name}</h3>
           <p className='text-black font-sans p-4'>{review.review}</p>
           <p className='font-bold text-orange-500 '>Ratings: {review.ratings}</p>

           </div>
            
        </div>
    );
};

export default ReviewDetails;