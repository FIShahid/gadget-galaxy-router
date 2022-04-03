import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
;

const Reviews = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold'>What our Customer Says...</p>
            <h1>Review Page:{reviews.length}</h1>
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