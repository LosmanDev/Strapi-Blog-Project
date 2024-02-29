/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogContent({ blogs }) {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }
  console.log(blog);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        key={blog.id}
        className="w-full pb-10 bg-[#f9f9f9]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
            <div className="col-span-2 gap-8">
              <img
                className="h-56 w-full object-cover rounded"
                src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
              />
              <h1 className="font-bold text-2xl my-1 pt-5">
                {blog.attributes.blogTitle}
              </h1>
              <main className="prose mx-auto my-10">
                <BlocksRenderer content={blog.attributes.blogContent} />
              </main>
            </div>
            <di className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
              <div>
                <img
                  className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                  src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
                />
                <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                  {blog.attributes.authorName}
                </h1>
                <p className="text-center text-gray-900 font-medium">
                  {blog.attributes.authorDesc}
                </p>
              </div>
            </di>
          </div>
        </div>
      </div>
    </>
  );
}
