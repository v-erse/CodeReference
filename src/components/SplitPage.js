import React, { useState } from "react";

export function SplitPage(props) {
    const [leftVisible, setLeftVisible] = useState(false);

    function handleMouseEnter() {
        setLeftVisible(true);
    }

    function handleMouseLeave() {
        setLeftVisible(false);
    }

    let left = leftVisible ? props.left : "";
    return (
        <div className='splitPage'>
            <div
                className='splitPageLeft'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {left}
            </div>
            <div className='splitPageRight'>{props.right}</div>
        </div>
    );
}

export default SplitPage;
