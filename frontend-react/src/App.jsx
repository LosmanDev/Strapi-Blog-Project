import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {
  let { loading, data, error } = useFetch(
    'http://localhost:1337/api/blogs?populate=*',
  );
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center text-center mt-40">
        <h1 className="sm:text-5xl text-2xl font-medium pr-1">
          Loading Content
        </h1>
        <span className="loading loading-dots loading-lg sm:mt-7 mt-4"></span>
      </div>
    );
  if (error) return <p>Error!</p>;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage blogs={data ? data : ''} />}></Route>
        <Route
          path="/blog/:id"
          element={<BlogPage blogs={data ? data : ''} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
