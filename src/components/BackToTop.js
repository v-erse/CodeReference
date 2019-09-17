import React, { useState, useEffect } from "react";

export default function BackToTop() {
    const [styles, setStyles] = useState({
        display: "block",
        position: "fixed",
        bottom: "1.3rem",
        right: "1.3rem",
        padding: "1rem 1.2rem",
        zIndex: "99",
        outline: "none",
        backgroundColor: "#111122e0",
        color: "#dadbdd",
        cursor: "pointer",
        borderRadius: "2px",
        border: "1px solid #dadbdd45",
        fontFamily: "Fira Mono",
        fontWeight: "300"
    });

    function handleClick() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // adds scroll event listener on component mount, removes it after unmount
    useEffect(() => {
        function checkTop() {
            if (window.scrollY > 500) {
                setStyles({ ...styles, display: "block" });
            } else {
                setStyles({ ...styles, display: "none" });
            }
        }

        checkTop();

        window.addEventListener("scroll", checkTop);

        return function cleanUp() {
            window.removeEventListener("scroll", checkTop);
        };
    }, []);

    return (
        <button onClick={handleClick} id='backToTop' style={styles}>
            ↑
        </button>
    );
}
