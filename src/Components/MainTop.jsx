import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

function MainTop() {
    return (
        <div className="main_nav">
            <div className="main_nav_left">
                <SearchIcon />
                <input
                    className="search_button"
                    type="search"
                    name=""
                    placeholder="Search"
                    id=""
                />
            </div>
            <div className="main_nav_right">
                <div className="main_nav_right_icons">
                    <button className="notification">
                        <NotificationsNoneIcon />
                    </button>
                    <button className="create_button">
                        + Creat New Project
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainTop;
