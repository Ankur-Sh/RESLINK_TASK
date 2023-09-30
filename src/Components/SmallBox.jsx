import React from "react";

import PersonIcon from "@mui/icons-material/Person";
function SmallBox() {
    return (
        <div className="box">
            <div className="box_left">
                <h1>07</h1>
                <h3>Active Projects</h3>
            </div>
            <div className="box_right">
                <PersonIcon />
            </div>
        </div>
    );
}

export default SmallBox;
