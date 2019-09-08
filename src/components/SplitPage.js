import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";

export function SplitPage(props) {
    const [inView, setInView] = useState("");
    const [newChildren, setNewChildren] = useState([]);
    const [sNavItems, setSNavItems] = useState([]);

    // const editChildren = () => {
    //     const editedChildren = React.Children.map(props.children, (child) => {
    //         let items = [];
    //         if (child.type === "h1" || child.type === "h2") {
    //             child = React.cloneElement(child, { id: child.props.children });
    //         }
    //         items.push(child);
    //         return items;
    //     });
    //     return editedChildren;
    // };

    // const getSideNavItems = () => {
    //     const sideNavs = React.Children.map(props.children, (child) => {
    //         let items = [];
    //         if (child.type === "h1") {
    //             items.push(child.props.children);
    //         } else if (child.type === "h2") {
    //             items.push("    " + child.props.children);
    //         }
    //         return items;
    //     });
    //     return sideNavs || "";
    // };

    // useEffect(() => {
    //     setNewChildren(editChildren);
    //     setSNavItems(getSideNavItems);
    // }, [props.children]);

    // console.log(props.headerIds);

    // useEffect(() => {
    //     const headerIds = props.headerIds
    //         ? props.headerIds.map((item) => {
    //               return item.trim();
    //           })
    //         : "";

    //     if (headerIds) {
    //         function checkInView() {
    //             headerIds.some((id) => {
    //                 const rect = document
    //                     .getElementById(id)
    //                     .getBoundingClientRect();
    //                 if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //                     setInView(id);
    //                     return true;
    //                 }
    //                 return false;
    //             });
    //         }

    //         checkInView();

    //         window.addEventListener("scroll", checkInView);

    //         return function cleanUp() {
    //             window.removeEventListener("scroll", checkInView);
    //         };
    //     }
    // }, [props.headerIds]);

    return (
        <div className='splitPage'>
            <div className='splitPageLeft'>{props.left}</div>
            <div className='splitPageMiddle'>{props.children}</div>
            <div className='splitPageRight'>
                {props.withSideNav ? (
                    <SideNav items={sNavItems} inView={inView} />
                ) : (
                    props.right
                )}
            </div>
        </div>
    );
}

export default SplitPage;
