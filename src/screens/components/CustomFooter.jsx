import React from "react";
import "../../styles/CustomFooter.css";

const CustomFooter = () => {
    return (
        <div className="footer-container">
            © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
    );
};

export default CustomFooter;
