import React, { useState } from "react";

export function SNavLink(props) {
    const [highlighted, setHighlighted] = useState(false);
    const id = props.toId || props.children.trim();

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
    if (highlighted) {
        styles.color = "#707070";
    } else if (props.inView === id) {
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
                          return (
                              <SNavLink key={item} inView={props.inView}>
                                  {item}
                              </SNavLink>
                          );
                      })
                    : ""}
            </ul>
        </div>
    );
}

export default SideNav;
