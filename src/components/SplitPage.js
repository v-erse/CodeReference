import React from "react";

export function SplitPage(props) {
    return (
        // <div className='splitPage'>
        <>
            <div className='splitPageLeft'>{props.left}</div>
            <div className='splitPageMiddle' id='splitPageMiddle'>
                {props.children}
            </div>
            <div className='splitPageRight'>{props.right}</div>
        </>
        // </div>
    );
}

export default SplitPage;
