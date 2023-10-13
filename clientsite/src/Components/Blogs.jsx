import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

const Blogs = () => {

    const blogs = useLoaderData()
    const navigate = useNavigate()

    const deletePost = id => {
        // console.log(id)
        fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                navigate('/posts');
            })
        
    }

    return (
        <div className='container mx-auto'>
            {
                blogs.map((blog, index) =>
                    <div key={blog._id} className='my-10 p-8 border-2'>
                        <h1>Blog: {index + 1}</h1>
                        <h1>{blog?.email}</h1>
                        <h1>{blog?.name}</h1>
                        <h1>{blog?.blog}</h1>
                        <div className='my-4'>
                            <Link to={`/posts/${blog._id}`}>
                                <button className='btn btn-secondary mr-5'>Edit Post</button>
                            </Link>
                            <button onClick={()=> deletePost(blog._id)} className='btn btn-warning'>Delete Post</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Blogs