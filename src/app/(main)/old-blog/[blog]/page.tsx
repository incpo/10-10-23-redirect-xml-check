import React from 'react';

const BlogPage = ({params}: {params: { blog: string }}) => {
    return (
        <main className='p-24 text-2xl font-black'>
            This is Old Blog page <span className='text-sky-400'>{params?.blog}</span>
        </main>
    );
};

export default BlogPage;