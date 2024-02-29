/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Blogs({ blogs }) {
  useEffect(() => {
    AOS.init();
  }, []);
  console.log(blogs);
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="max-w-[1240px] mx-auto"
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4 mt-10">
          {blogs.data.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
                <figure>
                  <img
                    className="h-64 w-full object-cover rounded"
                    src={
                      blog.attributes.coverImg?.data?.attributes.url
                        ? `http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`
                        : ''
                    }
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.attributes.blogTitle}</h2>
                  <p className="text-slate-500">{blog.attributes.blogDesc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
