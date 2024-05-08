import { useState, createContext } from "react";

export const SearchContext = createContext()

export function SearchContextProvider({children}){
    const [search, setSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    
    const searchGeneralMode = () => {
        setSearch((prevSearch) => !prevSearch )
        console.log(search)
    }

    return(
        <SearchContext.Provider value={{
            search,
            searchGeneralMode
        }}>
            {children}
        </SearchContext.Provider>
    )
}