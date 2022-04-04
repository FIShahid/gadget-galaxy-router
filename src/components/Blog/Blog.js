import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-3xl font-bold'>Question and Answer</h1>
            <p className='mt-10 mb-3 font-semibold text-gray-900'>
                What are the Semantic Tags?
            </p>
            <p className='text-gray-600 w-[500px] m-auto border-2 p-2 shadow-lg'>
                HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster..
            </p>

            <p className='mt-10 mb-3 font-semibold text-gray-900'>
                What is Context API?
            </p>
            <p className='text-gray-600 w-[500px] m-auto border-2 p-2 shadow-lg'>
                Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.
            </p>

            <p className='mt-10 mb-3 font-semibold text-gray-900'>
                Difference Between Inline / Inline-Block and Blocks
            </p>
            <p className='text-gray-600 w-[500px] m-auto border-2 p-2 shadow-lg'>
                inline The element does not start on a new line and only occupy just the width it requires. You can not set the width or height.

                Inline-block Its formatted just like the inline element, where it does not start on a new line. BUT, you can set width and height values.

                Block The element will start on a new line and occupy the full width available. And you can set width and height values.
            </p>
        </div>
    );
};

export default Blog;