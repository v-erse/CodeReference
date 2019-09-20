import React, { useState, useEffect } from "react";

export function SNavLink(props) {
    const [highlighted, setHighlighted] = useState(false);
    const id = props.toId || props.headerId;
    const node = document.getElementById(id);
    const isInView = props.currentlyInView === id;

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
    } else if (isInView) {
        styles.color = "#707070";
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
    const [scrollbarClicked, setScrollbarClicked] = useState(false);

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

            function scrollContents() {
                const contents = document.getElementById("contents");
                const container = contents.parentElement.parentElement;
                const ratio =
                    contents.getBoundingClientRect().height /
                    container.getBoundingClientRect().height;

                const pageScroll = window.scrollY - container.offsetTop;

                if (scrollbarClicked) {
                    contents.scrollTo({
                        top: pageScroll * ratio,
                        behavior: "smooth"
                    });
                    setTimeout(() => {
                        setScrollbarClicked(false);
                    }, 1000);
                } else {
                    contents.scrollTop = pageScroll * ratio;
                }
            }

            function catchScrollBarClick(event) {
                // the only place a user can click in ul#contents without
                // clicking a nav item is the scrollbar
                if (event.target.id === "contents") {
                    setScrollbarClicked(true);
                }
            }

            function handleScroll() {
                checkInView();
                scrollContents();
            }

            window.addEventListener("scroll", handleScroll);
            document.addEventListener("mousedown", catchScrollBarClick);

            return function cleanUp() {
                window.removeEventListener("scroll", handleScroll);
                document.removeEventListener("mousedown", catchScrollBarClick);
            };
        }
    }, [props.headerIds, scrollbarClicked]);

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
                                  currentlyInView={inView}
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
