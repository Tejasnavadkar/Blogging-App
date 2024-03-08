import React from 'react'
import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/conf'
import {Container, PostCard} from '../Components'


function Home() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((post)=>{
            setPosts(post.documents)
        })
    }, [])
    
  if(posts){
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap '>
                    {posts?.map((post)=>(
                        <div key={post.$id} className='p-2  md:flex flex-wrap flex-col justify-center  items-center w-full sm:w-1/4 md:w-1/4  '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
      )
    }

 else{
    return (
        <div className='w-full py-8 mt-4 text-center '>
            <Container>
                <div className='flex flex-wrap '>
                    <div className='p-2 w-full '>
                        <h1 className='text-2xl font-bold text-gray-500 pt-5 '>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
  }

}

export default Home