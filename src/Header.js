import React from "react";
import "./Header.css";
import Search from "./Search";

function Header({ searchQuery, setSearchQuery }) {
    return (<>
        <div className="header" >
            <div className="header__searchInput" >

                <Search searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery} />
            </div > </div> </>
    );
}

export default Header;