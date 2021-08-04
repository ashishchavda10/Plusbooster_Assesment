import React from "react";
import "../css/mainHeader.css";
import Search from "./search";

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