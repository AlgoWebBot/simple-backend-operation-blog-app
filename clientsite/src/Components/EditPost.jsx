import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const EditPost = () => {

    const post = useLoaderData();
    const editPost = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const blog = e.target.blog.value;

        const editedPost = { name, email, blog }
        console.log(editedPost)

        fetch(`http://localhost:5000/posts/${post._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(editedPost),
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
            });
    }

    return (
        <div className='container mx-auto my-8 border-2 space-y-2'>
            <div className='p-4'>
                <form onSubmit={editPost} className='w-full'>
                    <input type="text" defaultValue={post?.name} name='name' placeholder="name" className="input input-bordered input-lg w-full" />
                    <br />
                    <input type="text" name='email' defaultValue={post?.email} placeholder="email" className="input input-bordered input-lg w-full" />
                    <br />
                    <input type="text" name='blog' defaultValue={post?.blog} placeholder="blog" className="input input-bordered input-lg w-full" />
                    <br />
                    <input type="submit" name="" id="" value="Submit" className='btn w-full btn-success' />
                </form>
                <Link to='/posts'>
                    <button className='btn btn-primary'>Back</button>
                </Link>
            </div>
        </div>
    )
}

export default EditPost