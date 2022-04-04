import React from 'react';

const HomeCard = ({review}) => {
    
    return (
        <div>
             <div className=' container max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-slate-100 mx-12 mb-10'>
                            <div className='flex flex-col items-center pb-10'>
                                <img className='mb-3 w-[100px] h-[100px] mt-6 rounded-full shadow-lg ' src={review.image} alt="" />

                                <h3 className='font-bold text-orange-400 mt-4 mb-4'> Name: {review.name}</h3>
                                <p className='text-black font-sans p-4'>{(review.review.slice(0,190)+"...Read More")}</p>
                                <p className='font-bold text-orange-500  bottom-0 '>Ratings: {review.ratings}</p>

                            </div>

                        </div>
        </div>
    );
};

export default HomeCard;