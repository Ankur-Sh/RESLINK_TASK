import React from "react";

import MainTop from "./Components/MainTop";
import SmallBox from "./Components/SmallBox";
import BigBox from "./Components/BigBox";

const Main = () => {
    return (
        <div className="Main">
            <MainTop />
            <div className="all_content">
                <div className="main_heading">
                    <h1 className="heading">Welcome back,Olivia</h1>
                </div>
                <div className="main_title">
                    <h3 className="title">
                        {" "}
                        Track,manage researchers and submissions
                    </h3>
                </div>

                <div className="small_boxes">
                    <SmallBox />
                    <SmallBox />
                    <SmallBox />
                    <SmallBox />
                </div>
                <div className="big_boxes">
                    <BigBox />
                    <BigBox />
                </div>
            </div>
        </div>
    );
};

export default Main;
