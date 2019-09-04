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

    // function deepSectionSearch(children, indent = "", items = []) {
    //     React.Children.forEach(children, (child) => {
    //         // can do recursive deep search for "section" tags
    //         // id's of sections that are inside other sections will be indented
    //         if (child.type === "section") {
    //             console.log("sect: " + child.props.id);
    //             items.push(indent + child.props.id);
    //             console.log(items);
    //             // indent += "    ";
    //             deepSectionSearch(child.props.children, indent, items);
    //         }
    //     });
    //     return items;
    // }
    // const sideNavItems = deepSectionSearch(props.children);

    const sideNavItems = React.Children.map(props.children, (child) => {
        let items = [];
        // can do recursive deep search for "section" tags
        // id's of sections that are inside other sections will be indented
        if (child.type === "h1") {
            items.push(child.props.children);
        } else if (child.type === "h2") {
            items.push("    " + child.props.children);
        }
        return items;
    });

    const [inView, setInView] = useState("");
    const headerIds = sideNavItems.map((item) => {
        return item.trim();
    });

    useEffect(() => {
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
            });
        }

        checkInView();

        window.addEventListener("scroll", checkInView);

        return function cleanUp() {
            window.removeEventListener("scroll", checkInView);
        };
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
