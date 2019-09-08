import React, { useState, useEffect } from "react";

export function SNavLink(props) {
    const [highlighted, setHighlighted] = useState(false);
    const id = props.toId || props.headerId;
    const node = document.getElementById(id);

    function handleMouseEnter() {
        setHighlighted(true);
    }

    function handleMouseLeave() {
        setHighlighted(false);
    }

    function handleClick() {
        node.scrollIntoView({
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
            {node.nodeName === "H2" ? "    " + node.innerText : node.innerText}
        </li>
    );
}

export function SideNav(props) {
    const [headers, setHeaders] = useState([]);
    const [inView, setInView] = useState("");

    useEffect(() => {
        if (props.headerIds) {
            function checkInView() {
                props.headerIds.some((id) => {
                    const rect = document
                        .getElementById(id)
                        .getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setInView(id);
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
    }, [props.headerIds]);

    return (
        <div className='sideNav'>
            <ul>
                {props.headerIds
                    ? props.headerIds.map((id) => {
                          return (
                              <SNavLink
                                  key={id}
                                  inView={inView}
                                  headerId={id}
                              />
                          );
                      })
                    : ""}
            </ul>
        </div>
    );
}

export default SideNav;
