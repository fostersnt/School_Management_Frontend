import React from "react";
import "../../styles/CustomFooter.css";

const CustomFooter = () => {
    return (
        <div className="footer-container">
            {/* <footer className="footer"> */}
                © {new Date().getFullYear()} My Website. All rights reserved.
            {/* </footer> */}
        </div>
    );
};

export default CustomFooter;
