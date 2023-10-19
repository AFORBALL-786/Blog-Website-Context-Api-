import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

    // consume
    const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-11/12 h-full max-w-[45%] space-y-5 mt-16 mb-20'>
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ?
                (<div >
                    <p>No Post Found</p>
                </div>) :
                (posts.map ((post) => (
                    <div key={post.id}>
                        <p className='text-lg font-bold'>{post.title}</p>
                        <p className='text-sm'>By <span className='italic'>{post.author} on <span className='underline font-bold'>{post.category}</span></span></p>
                        <p className='text-sm'>Posted on {post.date}</p>
                        <p className='text-md mt-[4px]'>{post.content}</p>
                        <div className='space-x-3'>
                            {post.tags.map((tag, index) => <span key={index} className='text-blue-700 underline font-bold text-xs'>{` #${tag}`}</span>)}
                        </div>
                    </div>
                )))
            )
        }
      
    </div>
  )
}

export default Blogs
