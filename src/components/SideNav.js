import React, { useState, useEffect } from "react";
import { get } from "http";

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
        let parentTop = document.getElementById("root").getBoundingClientRect()
            .top;
        let y = node.getBoundingClientRect().top - parentTop;
        console.log(y);
        window.scrollTo({
            top: y - 15,
            behavior: "smooth"
        });
    }

    let styles = {
        color: "#b8b8b8",
        fontWeight: "300"
    };
    if (highlighted) {
        styles.color = "#404040";
    } else if (props.inView === id) {
        styles.color = "#707070";

        let navTop = document
            .getElementById(id + "-nav")
            .getBoundingClientRect().top;
        document
            .getElementById("contents")
            .scrollTo({ top: navTop, behavior: "smooth" });
    }

    if (node.nodeName === "H2") {
        styles.paddingLeft = "17px";
    } else if (node.nodeName === "H3") {
        styles.paddingLeft = "34px";
    }

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={styles}
            id={id + "-nav"}>
            {node.innerText}
        </li>
    );
}

export function SideNav(props) {
    const [inView, setInView] = useState("");

    useEffect(() => {
        if (props.headerIds) {
            function checkInView() {
                props.headerIds.some((id) => {
                    const rect = document
                        .getElementById(id)
                        .getBoundingClientRect();
                    if (rect.top >= -5 && rect.bottom <= window.innerHeight) {
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
            <input type='checkbox' id='sideNavContents' />
            <label htmlFor='sideNavContents'>Contents</label>
            <ul className='sideNavContent' id='contents'>
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
