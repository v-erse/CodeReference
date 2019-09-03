import React from "react";
import SideNav from "./SideNav";
import CodeBlock from "./CodeBlock";

export function SplitPage(props) {
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
            <div className='splitPageMiddle'>{props.children}</div>
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
