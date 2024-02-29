/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';

export default function BlogPage({ blogs }) {
  return (
    <>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </>
  );
}
