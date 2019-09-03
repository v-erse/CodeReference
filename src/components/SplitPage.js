import React, { useEffect } from "react";
import { SideNav, SNavLink } from "./SideNav";

export function SplitPage(props) {
    const editedChildren = React.Children.map(props.children, (child) => {
        let items = [];
        if (child.type === "h1" || child.type === "h2") {
            child = React.cloneElement(child, { id: child.props.children });
        }
        items.push(child);
        return items;
    });

    const sideNavItems = React.Children.map(props.children, (child) => {
        let items = [];
        if (child.type === "h1") {
            items.push(child.props.children);
        } else if (child.type === "h2") {
            items.push("    " + child.props.children);
        }
        return items;
    });

    return (
        <div className='splitPage'>
            <div className='splitPageLeft'>{props.left}</div>
            <div className='splitPageMiddle'>{editedChildren}</div>
            <div className='splitPageRight'>
                {props.withSideNav ? (
                    <SideNav items={sideNavItems} />
                ) : (
                    props.right
                )}
            </div>
        </div>
    );
}

export default SplitPage;
