import React, { useState } from "react";

export function VNavItem(props) {
    const [highlighted, setHighlighted] = useState(false);

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    let styles = { color: "#D6D6D6" };
    if (highlighted || props.active) {
        styles.color = "#A0A0A0";
    }

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={styles}>
            {props.children}
        </li>
    );
}

export function VerticalNav(props) {
    return (
        <div className='verticalNav'>
            <VNavItem>It's not</VNavItem>
            <VNavItem>Unlike you</VNavItem>
            <VNavItem>No</VNavItem>
            <ul>
                <VNavItem>It's not unlike</VNavItem>
                <VNavItem>You</VNavItem>
            </ul>
            <VNavItem active>Keep calm</VNavItem>
            <ul>
                <VNavItem>Here we go again</VNavItem>
            </ul>
        </div>
    );
}

export default VerticalNav;
