import React, { useState } from "react";

function VNavItem(props) {
    const [highlighted, setHighlighted] = useState(false);

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    let styles = { color: "#D6D6D6", whiteSpace: "pre" };
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

export function SideNav(props) {
    return (
        <div className='verticalNav'>
            <ul>
                {props.items.map((item) => {
                    return <VNavItem>{item}</VNavItem>;
                })}
            </ul>
        </div>
    );
}

export default SideNav;
