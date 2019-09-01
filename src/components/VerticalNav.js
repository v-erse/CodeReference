import React, { useState } from "react";

export function VNavItem(props) {
    const [highlighted, setHighlighted] = useState(false);

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    let styles = { color: "gray" };
    if (highlighted) {
        styles.color = "black";
    }

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={styles}
            className='vNavItem'>
            {props.children}
        </li>
    );
}

export function VerticalNav(props) {
    return <div className='verticalNav'>{props.children}</div>;
}

export default VerticalNav;
