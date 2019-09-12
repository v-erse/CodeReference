import React from "react";

export default function CodeBlock(props) {
    return (
        <pre className='codeBlock'>
            <code>{props.children}</code>
        </pre>
    );
}
