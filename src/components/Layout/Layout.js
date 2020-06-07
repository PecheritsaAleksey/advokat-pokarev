import React from "react";
import Toolbar from "../Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <>
            <Toolbar />
            {props.children}
        </>
    );
};

export default Layout;
