import React from "react";

const customStyles = {
    backgroundColor: "#111122",
    margin: "2rem -2.5rem",
    padding: "1.5rem 2.5rem",
    borderRadius: "0"
};

export default function CodeBlock(props) {
    return (
        <pre style={customStyles}>
            <code>{props.children}</code>
        </pre>
    );
}
