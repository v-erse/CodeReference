import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";

export function SplitPage(props) {
    const editedChildren = React.Children.map(props.children, (child) => {
        let items = [];
        if (child.type === "h1" || child.type === "h2") {
            child = React.cloneElement(child, { id: child.props.children });
        }
        items.push(child);
        return items;
    });

    const sideNavItems =
        React.Children.map(props.children, (child) => {
            let items = [];
            if (child.type === "h1") {
                items.push(child.props.children);
            } else if (child.type === "h2") {
                items.push("    " + child.props.children);
            }
            return items;
        }) || "";

    const [inView, setInView] = useState("");
    const headerIds = sideNavItems
        ? sideNavItems.map((item) => {
              return item.trim();
          })
        : "";

    useEffect(() => {
        if (headerIds) {
            function checkInView() {
                headerIds.some((id) => {
                    const rect = document
                        .getElementById(id)
                        .getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setInView(id);
                        console.log(id);
                        return true;
                    }
                    return false;
                });
            }

            checkInView();

            window.addEventListener("scroll", checkInView);

            return function cleanUp() {
                window.removeEventListener("scroll", checkInView);
            };
        }
    });

    return (
        <div className='splitPage'>
            <div className='splitPageLeft'>{props.left}</div>
            <div className='splitPageMiddle'>{editedChildren}</div>
            <div className='splitPageRight'>
                {props.withSideNav ? (
                    <SideNav items={sideNavItems} inView={inView} />
                ) : (
                    props.right
                )}
            </div>
        </div>
    );
}

export default SplitPage;
