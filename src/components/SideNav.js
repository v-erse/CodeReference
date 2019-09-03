import React, { useState } from "react";

export function SNavLink(props) {
    const [highlighted, setHighlighted] = useState(false);

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    function handleClick() {
        console.log(props.to);
    }

    let styles = { color: "#D6D6D6", whiteSpace: "pre" };
    if (highlighted || props.active) {
        styles.color = "#A0A0A0";
    }

    let linkTo = props.to || "#" + props.children.trim();

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={styles}>
            <a href={linkTo}>{props.children}</a>
        </li>
    );
}

export function SideNav(props) {
    return (
        <div className='sideNav'>
            <ul>
                {props.items.map((item) => {
                    return <SNavLink>{item}</SNavLink>;
                })}
            </ul>
        </div>
    );
}

export default SideNav;
