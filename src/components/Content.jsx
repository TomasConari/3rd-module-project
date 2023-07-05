import { useState , useEffect } from "react";

export const Content = ({ searchState }) => {

    return(
            <div className="searchContainer">
                <input className={`searchBar ${searchState ? 'shown' : ''}`} type='text' placeholder=' Search...'></input>
            </div>
    )
};