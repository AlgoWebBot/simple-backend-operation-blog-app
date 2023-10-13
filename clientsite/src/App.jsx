import './App.css'

function App() {

  const handleBlog = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const blog = e.target.blog.value;

    const userBlog = { name, email, blog }
    console.log(blog)

    // ! post pathabo back end e
    fetch('http://localhost:5000/posts', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userBlog)
    })
    
    // ! response pabo backend theke
      .then(res => res.json())
      .then(data => {
        e.target.reset()
      });

  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold py-8 text-center'>This is Blog Home</h1>

      <div className='w-1/2 mx-auto'>
        <form onSubmit={handleBlog} className='w-full'>
          <input type="text" name='name' placeholder="name" className="input input-bordered input-lg w-full" />
          <br />
          <input type="text" name='email' placeholder="email" className="input input-bordered input-lg w-full" />
          <br />
          <input type="text" name='blog' placeholder="blog" className="input input-bordered input-lg w-full" />
          <br />
          <input type="submit" name="" id="" value="Submit" className='btn w-full btn-success'/>
        </form>
      </div>
    </div>
  )
}

export default App
