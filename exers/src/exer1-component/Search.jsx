import React from 'react'
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

 const Search = ({search}) => {
    return (
        <div className="search">
            <CgDetailsMore className="more-icon"/>
            <AiOutlineSearch className="search-icon"/>
            <input type="text" placeholder="Search by name" onChange={(e)=>search(e)} />
        </div>
    )
}
export default Search;