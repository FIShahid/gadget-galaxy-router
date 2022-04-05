import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold text-purple-600'>Question and Answer</h1>
            <p className='  mt-10 mb-3 font-semibold text-2xl text-orange-400'>
                What are the Semantic Tags?
            </p>
            <p className='text-black w-[600px] m-auto border-2 p-2 bg-green-300 shadow-lg font-semibold'>
               Code needs to write in a way that is understandable to both human and machines. Semantic tags fullfil that requirements. Because Semantic tags are specific and describe exactly what is the purpose of the content that is inside the tags. Its also easier to read. Semantic tags are consistent and also has great accessibility. Header, Article, Footers are some example of Semantic Tags             </p>

            <p className='mt-10 mb-3 font-semibold text-2xl text-orange-400'>
                What is Context API?
            </p>
            <p className='text-black w-[600px] m-auto border-2 p-2 bg-green-300 shadow-lg font-semibold'>
                If we want to pass props from one component to another we have to use props drilling method. And if it is multi layered than it becomes more complex. That is why React developed a method structure to solve the problem. It enables us to produce a global variable that we can pass around from grandparents component to grandchild component without having to interact with the parent component. It also enhance the performance and reduce redundance.
            </p>

            <p className='mt-10 mb-3 font-semibold text-2xl text-orange-400'>
                Difference Between Inline / Inline-Block and Blocks
            </p>
            <p className='text-black w-[600px] m-auto border-2 p-2 bg-green-300 shadow-lg font-semibold'>
                inline The element does not start on a new line and only occupy just the width it requires. You can not set the width or height.

                Inline-block Its formatted just like the inline element, where it does not start on a new line. BUT, you can set width and height values.

                Block The element will start on a new line and occupy the full width available. And you can set width and height values.
            </p>
        </div>
    );
};

export default Blog;