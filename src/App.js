import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get
  },[])

  return (
    // <div className="w-full h-full flex flex-col items-center justify-center">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
    // </div>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>

  );
}

export default App;
