import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import profile from "./assets/logo/profile.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CommentIcon from "@mui/icons-material/Comment";
function Navbar() {
    return (
        <div className="nav">
            <div className="nav_items">
                <div className="logo">
                    <img src={profile} className="logo" alt="RESLINK" />
                    <span>RESLINK</span>
                </div>
                <div className="nav_tags">
                    <div className="link">
                        <a href="/" className="tags">
                            <BarChartIcon />
                            &nbsp; Dashboard
                        </a>
                    </div>
                    <div className="link">
                        <a href="/" className="tags">
                            <AccountTreeIcon />
                            &nbsp; Projects
                        </a>
                    </div>
                    <div className="link">
                        <a href="/" className="tags">
                            <PeopleAltIcon /> &nbsp; Staffing
                        </a>
                    </div>
                    <div className="link">
                        <a href="/" className="tags">
                            <CommentIcon />
                            &nbsp; Messages
                        </a>
                    </div>
                </div>

                <div className="mark">
                    <div className="link">
                        <a href="/" className="tags">
                            <BarChartIcon /> &nbsp;Support
                        </a>
                    </div>
                    <div className="link">
                        <a href="/" className="tags">
                            <SettingsIcon />
                            &nbsp; Settings
                        </a>
                    </div>
                    <div className="profile">
                        <div className="profile_left">
                            {" "}
                            <img
                                className="nav_profile"
                                src={profile}
                                alt="profile"
                            />{" "}
                        </div>
                        <div className="profile_middle">
                            <h4>Olivia rhyme</h4>
                            <span>olivia@untitled.com</span>
                        </div>
                        <div className="profile_right">
                            <LogoutIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
