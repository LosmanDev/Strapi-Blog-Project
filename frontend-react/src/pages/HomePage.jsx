import Navbar from '../components/Navbar';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
export default function HomePage({ blogs }) {
  return (
    <>
      <Navbar />
      <Blogs blogs={blogs ? blogs : ''} />
      <Footer />
    </>
  );
}
