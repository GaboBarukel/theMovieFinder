import { useContext } from "react";
import { SearchContext } from "../Context/searchContext";

export const useSearchContext = () => {
    const search = useContext(SearchContext)

    if(search === undefined){
        throw new Error('useSearchContext must be used within a SearchProvider')
    }

    return search
}