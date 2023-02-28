import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { PostsInfos } from "./PostsInfosContext";

interface SearchPostContextType {
    Search: () => void,
    setValueSearch: (value: valueSearchType) => void,
}

interface SearchContextProps {
    children: ReactNode
}

interface valueSearchType {
    postContent: string
}

export const SearchPostContext = createContext({} as SearchPostContextType) 

export function SearchContext({children}: SearchContextProps ) {

    const {setPosts} = useContext(PostsInfos)

    const [valueSearch, setValueSearch] = useState<valueSearchType>({
        postContent: "   "
    })

    useEffect(() => {
        if(valueSearch.postContent !== "   ") {
            Search()
        }

    }, [valueSearch])

    async function Search() {
        const response = await api.get(`/search/issues?q=${valueSearch.postContent}%20repo:thalesmenz/Github-Blog`)

        setPosts(response.data.items)
        console.log(response.data.items)
    }

    return (
        <SearchPostContext.Provider value={{Search, setValueSearch}}>
            {children}
        </SearchPostContext.Provider>
    )
}