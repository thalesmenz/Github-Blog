import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface SearchPostContextType {
    Search: () => void,
    setValueSearch: (value: string) => void,
    valueSearch: string
}

interface SearchContextProps {
    children: ReactNode
}

export const SearchPostContext = createContext({} as SearchPostContextType) 

export function SearchContext({children}: SearchContextProps ) {

    const [valueSearch, setValueSearch] = useState<string>('')

    useEffect(() => {
        if(valueSearch != '') {
            Search()
        }

    }, [valueSearch])

    async function Search() {
        const response = await api.get(`/search/issues?q=${valueSearch}%20repo:thalesmenz/Github-Blog`)

        console.log(response.data)
    }

    return (
        <SearchPostContext.Provider value={{Search, setValueSearch, valueSearch}}>
            {children}
        </SearchPostContext.Provider>
    )
}