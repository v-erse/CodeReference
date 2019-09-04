import React, { useState, useEffect } from "react";

export function SNavLink(props) {
    const [highlighted, setHighlighted] = useState(false);
    const [inView, setView] = useState(false);
    const id = props.toId || props.children.trim();
    const idLink = "#" + id;

    useEffect(() => {
        function checkInView() {
            const rect = document.getElementById(id).getBoundingClientRect();
            setView(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }

        checkInView();

        window.addEventListener("scroll", checkInView);

        return function cleanUp() {
            window.removeEventListener("scroll", checkInView);
        };
    });

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    function handleClick() {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    }

    let styles = { color: "#D6D6D6", whiteSpace: "pre" };
    if (highlighted || inView) {
        styles.color = "#A0A0A0";
    }

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={styles}>
            {props.children}
        </li>
    );
}

export function SideNav(props) {
    return (
        <div className='sideNav'>
            <ul>
                {props.items
                    ? props.items.map((item) => {
                          return <SNavLink key={item}>{item}</SNavLink>;
                      })
                    : ""}
            </ul>
        </div>
    );
}

export default SideNav;
