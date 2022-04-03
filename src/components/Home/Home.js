import React, { useEffect, useState } from 'react';

const Home = () => {
    const [reviews, setReviews] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    
    return (
        <div>

<div className='flex flex-row py-8  mx-auto items-center justify-between container'>
           <div className=''>
           <h1 className='text-5xl'>This is Home</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, neque aliquam et nobis esse nemo officiis, quo voluptates suscipit voluptatum, praesentium atque? Distinctio dolorum dolor asperiores, beatae ratione consequuntur quibusdam?</p>
           <button className='m-5 p-5 bg-green-500'>Live Demo</button>
           </div>
           <div>
               <img  className='h-[400px] ' src="../../Assets/mac.png" alt="" />
           </div>

        </div>

            <div>
                <h4 className='text-4xl mt-5'>Customer Review :{reviews.length} </h4>
            </div>
        </div>
        
        
    );
};

export default Home;