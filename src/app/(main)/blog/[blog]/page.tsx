import React from 'react';

const BlogPage = ({params}) => {
    return (
        <main className='p-24 text-2xl font-black'>
            This is Blog page <span className='text-sky-400'>{params?.blog}</span>
        </main>
    );
};

export default BlogPage;