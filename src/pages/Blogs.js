import React from 'react'
import { NavLink } from 'react-router-dom';

const Blogs = (props) => {
  let blogs = props.blogsData;
  return (
    <div>

      <div> 
        <h1>Blogs</h1>
      </div>

      <div>
        {
          blogs.map((blog) => {
            return(
              <div className='flex justify-center justify-around'>
                <h1>{blog.id}.</h1>
                <h1>{blog.topic}</h1>
                <button >
                  <NavLink to='/blogs/blog'> Click Here</NavLink>
                </button>
              </div>
              
            )
          })
        }
      </div>

    </div>
  )
}

export default Blogs