import React from "react";

const customStyles = {
    backgroundColor: "#111122",
    margin: "1.5rem -2.5rem",
    padding: "1.5rem 2.5rem"
    // borderRadius: "2px"
};

export default function CodeBlock(props) {
    return (
        <pre style={customStyles}>
            <code>{props.children}</code>
        </pre>
    );
}
