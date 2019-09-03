import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const customStyles = {
    backgroundColor: "#111122",
    margin: "1.5rem -2.5rem",
    padding: "1.5rem 2.5rem",
    borderRadius: "0"
};

export default function CodeBlock(props) {
    return (
        <SyntaxHighlighter
            language='jsx'
            style={tomorrow}
            customStyle={customStyles}>
            {props.children.trim()}
        </SyntaxHighlighter>
    );
}
