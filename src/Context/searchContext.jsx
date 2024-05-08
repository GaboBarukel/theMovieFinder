import { useState, createContext } from "react";

export const SearchContext = createContext()

export function SearchContextProvider({children}){
    const [search, setSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    
    const searchGeneralMode = () => {
        setSearch((prevSearch) => !prevSearch )
    }

    const searchQueryTerm = (queryTerm) => {
        setSearchTerm(queryTerm);
    }

    return(
        <SearchContext.Provider value={{
            search,
            searchGeneralMode,
            searchTerm,
            searchQueryTerm
        }}>
            {children}
        </SearchContext.Provider>
    )
}