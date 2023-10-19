import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
import axios from "axios";


// step 1 : create context
export const AppContext = createContext();

// step 2 : Provider
export function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    // Data Filling 
    async function fetchBlogPosts(page = 1 , tag=null, category) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        if(tag) url += `&tag=${tag}`;
        if(category) url += `&category=${category}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
        } catch(error){
            console.log("Error in Fetching data",error);
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange,
    };

    // step 3 : sending data to children for consuming
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}