import React from "react";

import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HeaderNav from "./headerNav";
import SplitPage from "./splitPage";

const Layout = (props) => {
    return (
        <>
            <HeaderNav />
            <SplitPage withSideNav={props.withSideNav}>
                {props.children}
            </SplitPage>
            <Footer />
        </>
    );
};

export default Layout;
