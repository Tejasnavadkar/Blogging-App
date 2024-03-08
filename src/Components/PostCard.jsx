import React from 'react'
import appwriteService from '../appwrite/conf'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className=' w-full bg-gray-100 flex flex-col flex-wrap rounded-xl pt-3 md:p-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center '>
            <div className='w-[70%] md:w-full justify-center mb-1 '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className=' rounded-xl'/>
            </div>
            <h2 className='md:text-2xl text-md font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard